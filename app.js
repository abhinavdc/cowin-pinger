const axios = require('axios')


const iftttWebhookKey = '<IFTTT-KEY>' // Replace value here
const iftttWebhookName = '<IFTTT-WEBHOOK-NAME>' // Replace value here
const districtId = '<DISTRICT-ID>'; // Replace value here


const intervalInMs = 300000; // 5 mins interval

function getDate() {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const dd = tomorrow.getDate();
    const mm = tomorrow.getMonth() + 1;
    const yyyy = tomorrow.getFullYear();
    return `${dd < 10 ? '0' + dd : dd}-${mm < 10 ? '0' + mm : mm}-${yyyy}`
}
const date = getDate();

function pingCowin() {
    axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`).then((result) => {
        if (result.data.centers && result.data.centers.length) {
            axios.post(`https://maker.ifttt.com/trigger/${iftttWebhookName}/with/key/${iftttWebhookKey}`, { value1: result.data.centers.length }).then(() => {
                console.log('Sent Notification to Phone \nStopping Pinger...')
                clearInterval(timer);
            });
        }
    }).catch((err) => {
        console.log("Error: " + err.message);
    });
}

let pingCount = 0;
var timer = setInterval(() => {
    console.clear();
    pingCount += 1;
    pingCowin();
    console.log("Ping Count - ", pingCount);
}, intervalInMs);