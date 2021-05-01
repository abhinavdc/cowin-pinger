##  COWIN VACCINE AVAILABILITY NOTIFIER
Get notified on your phone when there is a vaccine slot available at your location, by running a script on your computer.

### Getting Started

- Setup IFTTT to send and recieve notifications as shown in this [article](https://betterprogramming.pub/how-to-send-push-notifications-to-your-phone-from-any-script-6b70e34748f6).

- Install IFTTT App on phone to recieve notifications

- Test if you receive notification like mentioned in the article above.

- Replace `<IFTTT-KEY>` with your WebHook Key from IFTTT in the code.

- Replace `<IFTTT-WEBHOOK-NAME>` with the name you used for the WebHook in IFTTT in the code.

- Replace `<YOUR-AGE>` with your age.

- Modify `appointmentsListLimit` value to change the number of session details you want to receive in the notification (default is 2).

- Replace `<DISTRICT-ID>` with your district's id from the list.
  - ### District Code in Kerala

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


### Run Script in local machine

After replacing all required values 

- Install [node](https://nodejs.org/en/download/)
- Install dependencies by running `npm install`
- Run Script - `node app.js`

### Developer Todo
- Add more District IDs to readme me
- Add option for Pin Code search


