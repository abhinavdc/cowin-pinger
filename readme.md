#  COWIN VACCINE AVAILABILITY NOTIFIER
Get notified on your phone when there is a vaccine slot available at your location, by running a script on your computer. Uses Co-Win public APIs.

![Instructions-GIF](https://github.com/abhinavdc/cowin-pinger/blob/master/img/instructions.gif)

## GETTING STARTED
### Run cowin-pinger

Install [node](https://nodejs.org/en/download/), if not already installed. Then run the following command:

    npx cowin-pinger run --key=<IFTTT-KEY> --hook=<IFTTT-WEBHOOK-NAME> --age=<YOUR-AGE> --district=<DISTRICT-ID>

Replace the arguments above with the required values like mentioned below

  - Replace `<IFTTT-KEY>` with your WebHook Key from IFTTT.

  - Replace `<IFTTT-WEBHOOK-NAME>` with the name you used for the WebHook in IFTTT.

  - Replace `<YOUR-AGE>` with your age.

  - Replace `<DISTRICT-ID>` with your district's id from this [list](#district_list).

Optional arguments accepted:

  - Pass `--interval=<INTERVAL-IN-MINUTES>` to change the frequency of calling Cowin API  (default is 15 mins).
  - Pass `--appts=<APPOINTMENT-COUNT>` to specify the number of session details you want to receive in the notification (default is 2).

### Setting Up IFTTT for WebHook Name and Key

- Follow the steps mentioned in the [article](https://betterprogramming.pub/how-to-send-push-notifications-to-your-phone-from-any-script-6b70e34748f6) to setup IFTTT.

- Install IFTTT App on phone to recieve notifications

- Test if you receive notification like mentioned in the article above.

## <a name="district_list">District IDs</a>
- ### District IDs in Kerala
  - 301: Alappuzha
  - 307: Ernakulam
  - 306: Idukki
  - 297: Kannur
  - 295: Kasaragod
  - 298: Kollam
  - 304: Kottayam
  - 305: Kozhikode
  - 302: Malappuram
  - 308: Palakkad
  - 300: Pathanamthitta
  - 296: Thiruvananthapuram
  - 303: Thrissur
  - 299: Wayanad

- ### Other States
  To find District ID for other states: 
  - Got to cowin Portal in Browser
  - Open Network tab in Browser
  - Search for vaccine availabilty in portal
  - Check Network tab for requets
  - Find `district_id` property value from the requests

## Developer Todo
- Add more District IDs to readme me
- Add option for Pin Code search
- Improve cli interface

### Sample Notification on Phone

![Notification-Screenshot](https://github.com/abhinavdc/cowin-pinger/blob/master/img/notification-screenshot.jpg)


