#!/usr/bin/env node
const axios = require('axios')
const argv = require('minimist')(process.argv.slice(2));
const { format } = require('date-fns');
const isMatch = require('date-fns/isMatch')
const sound = require("sound-play");
const path = require("path");
const notificationSound = path.join(__dirname, "sounds/beep.wav");

const defaultInterval = 10; // interval between pings in minutes
const appointmentsListLimit = 2 // Increase/Decrease it based on the amount of information you want in the notification.
let timer = null;
const sampleUserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'

checkParams();

function checkParams() {
    if (argv.help) {
        console.error('Refer documentation for more details');
    } else if (argv._ && argv._.length && argv._.includes('run')) {
        if (argv.key && typeof argv.key !== 'string') {
            console.error('Please provide a valid IFTTT Webook API Key by appending --key=<IFTTT-KEY> to recieve mobile notification \nRefer documentation for more details');
            return;
        } else if (argv.hook && typeof argv.hook !== 'string') {
            console.error('Please provide a valid IFTTT Webook Name Key by appending --hook=<IFTTT-WEBHOOK-NAME> to recieve mobile notification \nRefer documentation for more details');
            return;
        } else if (argv.hook && !argv.key || !argv.hook && argv.key) {
            console.error('Please provide both IFTTT Webook Name Key and IFTTT Webhook Key to recieve mobile notification \nRefer documentation for more details');
            return;
        } else if (!argv.age) {
            console.error('Please provide your age by appending --age=<YOUR-AGE> \nRefer documentation for more details');
            return;
        } else if (argv.age && argv.age < 18) {
            console.error('Please provide an age greater than or equal to 18');
            return;
        } else if (!argv.district && !argv.pin) {
            console.error('Please provide either district-id or pincode by appending --district=<DISTRICT-ID> or --pin=<PINCODE> \nRefer documentation for more details');
            return;
        } else if (argv.pin && argv.pin.toString().length !== 6) {
            console.error('Pincode must be a 6 digit number \nRefer documentation for more details');
            return;
        } else if (argv.interval && argv.interval < 1) {
            // these APIs are subject to a rate limit of 100 API calls per 5 minutes per IP
            console.error('Please provide an interval greater than or equal to 1 minutes');
            return;
        } else if (argv.date && !isMatch(argv.date, 'dd-MM-yyyy')) {
            console.error('Please provide date in dd-mm-yyyy format');
            return;
        } else if (!argv.dose || (argv.dose && argv.dose !== 1 && argv.dose !== 2)) {
            console.error('Please mention if your require first dose or second dose by passing --dose=1 or --dose=2 \n');
            return;
        } 
        else if ((argv.vaccine && typeof argv.vaccine !== 'string') || (argv.vaccine && argv.vaccine.toLowerCase() !== 'covishield' && argv.vaccine.toLowerCase() !== 'covaxin')) {
            console.error('Please provide vaccine param as COVAXIN or COVISHIELD');
            return;
        } 
        else {            
            const params = {
                vaccine: argv.vaccine, // vaccine = COVISHIELD , COVAXIN
                dose: argv.dose, // dose = 1, 2
                key: argv.key,
                hook: argv.hook,
                age: argv.age,
                districtId: argv.district,
                interval: argv.interval || defaultInterval,
                appointmentsListLimit: argv.appts || appointmentsListLimit,
                date: argv.date || format(new Date(), 'dd-MM-yyyy'),
                pin: argv.pin
            }

            console.log('\nCowin Pinger started succesfully\n');
            console.log(`Date= ${params.date}`);
            console.log(`Age= ${params.age}`);
            console.log(`Dose= ${params.dose === 1 ? 'First Dose' : 'Second Dose'}`);
            params.vaccine && console.log(`Vaccine= ${params.vaccine.toUpperCase()}`);
            if (params.pin) {
                console.log(`Pincode= ${params.pin}`);
            } else {
                console.log(`District ID= ${params.districtId}`);
            }
            console.log(`Time interval= ${params.interval} minutes (default is 10)`);
            console.log(`Appointment Count= ${params.appointmentsListLimit} (default is 2)`);
            if (params.hook && params.key) {
                console.log(`IFTTT API Key= ${params.key || "not configured"}`);
                console.log(`IFTTT Hook Name= ${params.hook || "not configured"}`);
            } else {
                console.log('\nMake sure to turn up the volume to hear the notifcation sound')
            }
            console.log('\n\n')
            scheduleCowinPinger(params);
        }
    } else {
        console.log('\nInvalid command\n\nRun `cowin-pinger run` with all required params to start pinging cowin portal\nRefer documentation for instructions on how to run package\n');
    }
}

function scheduleCowinPinger(params) {
    let pingCount = 0;
    timer = setInterval(() => {
        console.clear();
        pingCount += 1;
        pingCowin(params);
        console.log("Ping Count - ", pingCount);
    }, params.interval * 60000);
}

function pingCowin({ key, hook, age, districtId, appointmentsListLimit, date, pin, vaccine, dose }) {
    const baseUrl = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/'

    let url = pin ? `${baseUrl}calendarByPin?pincode=${pin}&date=${date}` : `${baseUrl}calendarByDistrict?district_id=${districtId}&date=${date}`

    const ageLimit = age >= 18 && age < 45 ? 18 : 45;

    axios.get(url, { headers: { 'User-Agent': sampleUserAgent } }).then((result) => {
        const { centers } = result.data;
        let isSlotAvailable = false;
        let dataOfSlot = "";
        let appointmentsAvailableCount = 0;
        if (centers.length) {
            centers.forEach(center => {
                center.sessions.forEach((session => {
                    if (session.min_age_limit === ageLimit && session.available_capacity > 0) {
                        if(dose === 1 && session.available_capacity_dose1 <= 0){
                            return;
                        }
                        if(dose === 2 && session.available_capacity_dose2 <= 0){
                            return;
                        }
                        if(vaccine && vaccine.toLowerCase() !== session.vaccine.toLowerCase()) {
                            return;
                        }
                        isSlotAvailable = true
                        appointmentsAvailableCount++;
                        if (appointmentsAvailableCount <= appointmentsListLimit) {
                            dataOfSlot = `${dataOfSlot}\nSlot for ${session.available_capacity} is available: ${center.name} on ${session.date}`;
                        }
                    }
                }))
            });

            if (appointmentsAvailableCount - appointmentsListLimit) {
                dataOfSlot = `${dataOfSlot}\n${appointmentsAvailableCount - appointmentsListLimit} more slots available...`
            }
        }
        if (isSlotAvailable) {
            if (hook && key) {
                axios.post(`https://maker.ifttt.com/trigger/${hook}/with/key/${key}`, { value1: dataOfSlot }).then(() => {
                    console.log(dataOfSlot);
                    console.log('Sent Notification to Phone \nStopping Pinger...')
                    sound.play(notificationSound);
                    clearInterval(timer);
                });
            } else {
                console.log(dataOfSlot);
                console.log('Slots found\nStopping Pinger...')
                sound.play(notificationSound, 1);
                clearInterval(timer);
            }
        }
    }).catch((err) => {
        console.log("Error: " + err.message);
    });
}