#  COWIN VACCINE AVAILABILITY NOTIFIER
Get notified on your phone when there is a vaccine slot available at your location, by running a script on your computer. Uses Co-Win public APIs. 

Update: Now works without IFTTT by playing a notification sound when a slot is found.

![Instructions-GIF](https://github.com/abhinavdc/cowin-pinger/blob/main/img/instructions.gif)

## GETTING STARTED

Install [node](https://nodejs.org/en/download/), if not already installed. Then run the following command:

    npx cowin-pinger run --age=<YOUR-AGE> --district=<DISTRICT-ID>

Replace the arguments above with the required values like mentioned below

  - Replace `<YOUR-AGE>` with your age.

  - Replace `<DISTRICT-ID>` with your district's id from this [list](#district_list).

Optional arguments accepted:

  - Pass `--interval=<INTERVAL-IN-MINUTES>` to change the frequency of calling Cowin API  (default is 15 mins).
  - Pass `--appts=<APPOINTMENT-COUNT>` to specify the number of session details you want to receive in the notification (default is 2).

  ## IFTTT Integration (Optional)
  By integrating with [IFTTT](https://ifttt.com/) you can recieve the notification on your phone.
  - ### Setting Up IFTTT

    - Follow the steps mentioned in the [article](https://betterprogramming.pub/how-to-send-push-notifications-to-your-phone-from-any-script-6b70e34748f6) to setup IFTTT.

    - Install IFTTT App on phone to recieve notifications

    - Test if you receive notification like mentioned in the article above.
  - ### Run Cowin-Pinger with IFTTT Configuration

        npx cowin-pinger run --key=<IFTTT-KEY> --hook=<IFTTT-WEBHOOK-NAME> --age=<YOUR-AGE> --district=<DISTRICT-ID>
   
      - Replace `<IFTTT-KEY>` with your WebHook Key from IFTTT.

      - Replace `<IFTTT-WEBHOOK-NAME>` with the name you used for the WebHook in IFTTT.

## <a name="district_list">District IDs</a>

<details>
  <summary> Andaman & Nicobar Islands </summary>

  - 3: Nicobar
  - 1: North and Middle Andaman
  - 2: South Andaman
</details>

<details>
  <summary> Andhra Pradesh </summary>

  - 9: Anantapur
  - 10: Chittoor
  - 11: East Godavari
  - 5: Guntur
  - 4: Krishna
  - 7: Kurnool
  - 12: Prakasam
  - 13: Sri Potti Sriramulu Nellore
  - 14: Srikakulam
  - 8: Visakhapatnam
  - 15: Vizianagaram
  - 16: West Godavari
  - 6: YSR District, Kadapa (Cuddapah)
</details>

<details>
  <summary> Arunachal Pradesh </summary>

  - 22: Anjaw
  - 20: Changlang
  - 25: Dibang Valley
  - 23: East Kameng
  - 42: East Siang
  - 17: Itanagar Capital Complex
  - 24: Kamle
  - 27: Kra Daadi
  - 21: Kurung Kumey
  - 33: Lepa Rada
  - 29: Lohit
  - 40: Longding
  - 31: Lower Dibang Valley
  - 18: Lower Siang
  - 32: Lower Subansiri
  - 36: Namsai
  - 19: Pakke Kessang
  - 39: Papum Pare
  - 35: Shi Yomi
  - 37: Siang
  - 30: Tawang
  - 26: Tirap
  - 34: Upper Siang
  - 41: Upper Subansiri
  - 28: West Kameng
  - 38: West Siang
</details>

<details>
  <summary> Assam </summary>

  - 46: Baksa
  - 47: Barpeta
  - 765: Biswanath
  - 57: Bongaigaon
  - 66: Cachar
  - 766: Charaideo
  - 58: Chirang
  - 48: Darrang
  - 62: Dhemaji
  - 59: Dhubri
  - 43: Dibrugarh
  - 67: Dima Hasao
  - 60: Goalpara
  - 53: Golaghat
  - 68: Hailakandi
  - 764: Hojai
  - 54: Jorhat
  - 49: Kamrup Metropolitan
  - 50: Kamrup Rural
  - 51: Karbi-Anglong
  - 69: Karimganj
  - 61: Kokrajhar
  - 63: Lakhimpur
  - 767: Majuli
  - 55: Morigaon
  - 56: Nagaon
  - 52: Nalbari
  - 44: Sivasagar
  - 64: Sonitpur
  - 768: South Salmara Mankachar
  - 45: Tinsukia
  - 65: Udalguri
  - 769: West Karbi Anglong
</details>

<details>
  <summary> Bihar </summary>

  - 74: Araria
  - 78: Arwal
  - 77: Aurangabad
  - 83: Banka
  - 98: Begusarai
  - 82: Bhagalpur
  - 99: Bhojpur
  - 100: Buxar
  - 94: Darbhanga
  - 105: East Champaran
  - 79: Gaya
  - 104: Gopalganj
  - 107: Jamui
  - 91: Jehanabad
  - 80: Kaimur
  - 75: Katihar
  - 101: Khagaria
  - 76: Kishanganj
  - 84: Lakhisarai
  - 70: Madhepura
  - 95: Madhubani
  - 85: Munger
  - 86: Muzaffarpur
  - 90: Nalanda
  - 92: Nawada
  - 97: Patna
  - 73: Purnia
  - 81: Rohtas
  - 71: Saharsa
  - 96: Samastipur
  - 102: Saran
  - 93: Sheikhpura
  - 87: Sheohar
  - 88: Sitamarhi
  - 103: Siwan
  - 72: Supaul
  - 89: Vaishali
  - 106: West Champaran
</details>

<details>
  <summary> Chandigarh </summary>

  108 Chandigarh
</details>

<details>
  <summary> Chhattisgarh </summary>

  - 110: Balod
  - 111: Baloda bazar
  - 112: Balrampur
  - 113: Bastar
  - 114: Bemetara
  - 115: Bijapur
  - 116: Bilaspur
  - 117: Dantewada
  - 118: Dhamtari
  - 119: Durg
  - 120: Gariaband
  - 136: Gaurela Pendra Marwahi
  - 121: Janjgir-Champa
  - 122: Jashpur
  - 123: Kanker
  - 135: Kawardha
  - 124: Kondagaon
  - 125: Korba
  - 126: Koriya
  - 127: Mahasamund
  - 128: Mungeli
  - 129: Narayanpur
  - 130: Raigarh
  - 109: Raipur
  - 131: Rajnandgaon
  - 132: Sukma
  - 133: Surajpur
  - 134: Surguja
</details>

<details>
  <summary> Dadra And Nagar Haveli </summary>

  137 Dadra and Nagar Haveli
</details>

<details>
  <summary> Delhi </summary>

  - 141: Central Delhi
  - 145: East Delhi
  - 140: New Delhi
  - 146: North Delhi
  - 147: North East Delhi
  - 143: North West Delhi
  - 148: Shahdara
  - 149: South Delhi
  - 144: South East Delhi
  - 150: South West Delhi
  - 142: West Delhi
</details>

<details>
  <summary> Goa </summary>

  - 151: North Goa
  - 152: South Goa
</details>

<details>
  <summary> Gujarat </summary>

  - 154: Ahmedabad
  - 770: Ahmedabad Corporation
  - 174: Amreli
  - 179: Anand
  - 158: Aravalli
  - 159: Banaskantha
  - 180: Bharuch
  - 175: Bhavnagar
  - 771: Bhavnagar Corporation
  - 176: Botad
  - 181: Chhotaudepur
  - 182: Dahod
  - 163: Dang
  - 168: Devbhumi Dwaraka
  - 153: Gandhinagar
  - 772: Gandhinagar Corporation
  - 177: Gir Somnath
  - 169: Jamnagar
  - 773: Jamnagar Corporation
  - 178: Junagadh
  - 774: Junagadh Corporation
  - 156: Kheda
  - 170: Kutch
  - 183: Mahisagar
  - 160: Mehsana
  - 171: Morbi
  - 184: Narmada
  - 164: Navsari
  - 185: Panchmahal
  - 161: Patan
  - 172: Porbandar
  - 173: Rajkot
  - 775: Rajkot Corporation
  - 162: Sabarkantha
  - 165: Surat
  - 776: Surat Corporation
  - 157: Surendranagar
  - 166: Tapi
  - 155: Vadodara
  - 777: Vadodara Corporation
  - 167: Valsad
</details>

<details>
  <summary> Haryana </summary>

  - 193: Ambala
  - 200: Bhiwani
  - 201: Charkhi Dadri
  - 199: Faridabad
  - 196: Fatehabad
  - 188: Gurgaon
  - 191: Hisar
  - 189: Jhajjar
  - 204: Jind
  - 190: Kaithal
  - 203: Karnal
  - 186: Kurukshetra
  - 206: Mahendragarh
  - 205: Nuh
  - 207: Palwal
  - 187: Panchkula
  - 195: Panipat
  - 202: Rewari
  - 192: Rohtak
  - 194: Sirsa
  - 198: Sonipat
  - 197: Yamunanagar
</details>

<details>
  <summary> Himachal Pradesh </summary>

  - 219: Bilaspur
  - 214: Chamba
  - 217: Hamirpur
  - 213: Kangra
  - 216: Kinnaur
  - 211: Kullu
  - 210: Lahaul Spiti
  - 215: Mandi
  - 208: Shimla
  - 212: Sirmaur
  - 209: Solan
  - 218: Una
</details>

<details>
  <summary> Jammu & Kashmir </summary>

  - 224: Anantnag
  - 223: Bandipore
  - 225: Baramulla
  - 229: Budgam
  - 232: Doda
  - 228: Ganderbal
  - 230: Jammu
  - 234: Kathua
  - 231: Kishtwar
  - 221: Kulgam
  - 226: Kupwara
  - 238: Poonch
  - 227: Pulwama
  - 237: Rajouri
  - 235: Ramban
  - 239: Reasi
  - 236: Samba
  - 222: Shopian
  - 220: Srinagar
  - 233: Udhampur
</details>

<details>
  <summary> Jharkhand </summary>

  - 242: Bokaro
  - 245: Chatra
  - 253: Deoghar
  - 257: Dhanbad
  - 258: Dumka
  - 247: East Singhbhum
  - 243: Garhwa
  - 256: Giridih
  - 262: Godda
  - 251: Gumla
  - 255: Hazaribagh
  - 259: Jamtara
  - 252: Khunti
  - 241: Koderma
  - 244: Latehar
  - 250: Lohardaga
  - 261: Pakur
  - 246: Palamu
  - 254: Ramgarh
  - 240: Ranchi
  - 260: Sahebganj
  - 248: Seraikela Kharsawan
  - 249: Simdega
  - 263: West Singhbhum
</details>

<details>
  <summary> Karnataka </summary>

  - 270: Bagalkot
  - 276: Bangalore Rural
  - 265: Bangalore Urban
  - 294: BBMP
  - 264: Belgaum
  - 274: Bellary
  - 272: Bidar
  - 271: Chamarajanagar
  - 273: Chikamagalur
  - 291: Chikkaballapur
  - 268: Chitradurga
  - 269: Dakshina Kannada
  - 275: Davanagere
  - 278: Dharwad
  - 280: Gadag
  - 267: Gulbarga
  - 289: Hassan
  - 279: Haveri
  - 283: Kodagu
  - 277: Kolar
  - 282: Koppal
  - 290: Mandya
  - 266: Mysore
  - 284: Raichur
  - 292: Ramanagara
  - 287: Shimoga
  - 288: Tumkur
  - 286: Udupi
  - 281: Uttar Kannada
  - 293: Vijayapura
  - 285: Yadgir
</details>

<details>
  <summary> Kerala </summary>

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
</details>

<details>
  <summary> Ladakh </summary>

  - 309: Kargil
  - 310: Leh
</details>

<details>
  <summary> Lakshwadweep islands </summary>

  - 796: Agatti Island
  - 311: Lakshadweep
</details>

<details>
  <summary> Madhya Pradesh </summary>

  - 320: Agar
  - 357: Alirajpur
  - 334: Anuppur
  - 354: Ashoknagar
  - 338: Balaghat
  - 343: Barwani
  - 362: Betul
  - 351: Bhind
  - 312: Bhopal
  - 342: Burhanpur
  - 328: Chhatarpur
  - 337: Chhindwara
  - 327: Damoh
  - 350: Datia
  - 324: Dewas
  - 341: Dhar
  - 336: Dindori
  - 348: Guna
  - 313: Gwalior
  - 361: Harda
  - 360: Hoshangabad
  - 314: Indore
  - 315: Jabalpur
  - 340: Jhabua
  - 353: Katni
  - 339: Khandwa
  - 344: Khargone
  - 335: Mandla
  - 319: Mandsaur
  - 347: Morena
  - 352: Narsinghpur
  - 323: Neemuch
  - 326: Panna
  - 359: Raisen
  - 358: Rajgarh
  - 322: Ratlam
  - 316: Rewa
  - 317: Sagar
  - 333: Satna
  - 356: Sehore
  - 349: Seoni
  - 332: Shahdol
  - 321: Shajapur
  - 346: Sheopur
  - 345: Shivpuri
  - 331: Sidhi
  - 330: Singrauli
  - 325: Tikamgarh
  - 318: Ujjain
  - 329: Umaria
  - 355: Vidisha
</details>

<details>
  <summary> Maharashtra </summary>

  - 391: Ahmednagar
  - 364: Akola
  - 366: Amravati
  - 397: Aurangabad
  - 384: Beed
  - 370: Bhandara
  - 367: Buldhana
  - 380: Chandrapur
  - 388: Dhule
  - 379: Gadchiroli
  - 378: Gondia
  - 386: Hingoli
  - 390: Jalgaon
  - 396: Jalna
  - 371: Kolhapur
  - 383: Latur
  - 395: Mumbai
  - 365: Nagpur
  - 382: Nanded
  - 387: Nandurbar
  - 389: Nashik
  - 381: Osmanabad
  - 394: Palghar
  - 385: Parbhani
  - 363: Pune
  - 393: Raigad
  - 372: Ratnagiri
  - 373: Sangli
  - 376: Satara
  - 374: Sindhudurg
  - 375: Solapur
  - 392: Thane
  - 377: Wardha
  - 369: Washim
  - 368: Yavatmal
</details>

<details>
  <summary> Manipur </summary>

  - 398: Bishnupur
  - 399: Chandel
  - 400: Churachandpur
  - 401: Imphal East
  - 402: Imphal West
  - 410: Jiribam
  - 413: Kakching
  - 409: Kamjong
  - 408: Kangpokpi
  - 412: Noney
  - 411: Pherzawl
  - 403: Senapati
  - 404: Tamenglong
  - 407: Tengnoupal
  - 405: Thoubal
  - 406: Ukhrul
</details>

<details>
  <summary> Meghalaya </summary>

  - 424: East Garo Hills
  - 418: East Jaintia Hills
  - 414: East Khasi Hills
  - 423: North Garo Hills
  - 417: Ri-Bhoi
  - 421: South Garo Hills
  - 422: South West Garo Hills
  - 415: South West Khasi Hills
  - 420: West Garo Hills
  - 416: West Jaintia Hills
  - 419: West Khasi Hills
</details>

<details>
  <summary> Mizoram </summary>

  - 425: Aizawl East
  - 426: Aizawl West
  - 429: Champhai
  - 428: Kolasib
  - 432: Lawngtlai
  - 431: Lunglei
  - 427: Mamit
  - 430: Serchhip
  - 433: Siaha
</details>

<details>
  <summary> Nagaland </summary>

  - 434: Dimapur
  - 444: Kiphire
  - 441: Kohima
  - 438: Longleng
  - 437: Mokokchung
  - 439: Mon
  - 435: Peren
  - 443: Phek
  - 440: Tuensang
  - 436: Wokha
  - 442: Zunheboto
</details>

<details>
  <summary> Odisha </summary>

  - 445: Angul
  - 448: Balangir
  - 447: Balasore
  - 472: Bargarh
  - 454: Bhadrak
  - 468: Boudh
  - 457: Cuttack
  - 473: Deogarh
  - 458: Dhenkanal
  - 467: Gajapati
  - 449: Ganjam
  - 459: Jagatsinghpur
  - 460: Jajpur
  - 474: Jharsuguda
  - 464: Kalahandi
  - 450: Kandhamal
  - 461: Kendrapara
  - 455: Kendujhar
  - 446: Khurda
  - 451: Koraput
  - 469: Malkangiri
  - 456: Mayurbhanj
  - 470: Nabarangpur
  - 462: Nayagarh
  - 465: Nuapada
  - 463: Puri
  - 471: Rayagada
  - 452: Sambalpur
  - 466: Subarnapur
  - 453: Sundargarh
</details>

<details>
  <summary>  Puducherry </summary>

  - 476: Karaikal
  - 477: Mahe
  - 475: Puducherry
  - 478: Yanam
</details>

<details>
  <summary> Punjab </summary>

  - 485: Amritsar
  - 483: Barnala
  - 493: Bathinda
  - 499: Faridkot
  - 484: Fatehgarh Sahib
  - 487: Fazilka
  - 480: Ferozpur
  - 489: Gurdaspur
  - 481: Hoshiarpur
  - 492: Jalandhar
  - 479: Kapurthala
  - 488: Ludhiana
  - 482: Mansa
  - 491: Moga
  - 486: Pathankot
  - 494: Patiala
  - 497: Rup Nagar
  - 498: Sangrur
  - 496: SAS Nagar
  - 500: SBS Nagar
  - 490: Sri Muktsar Sahib
  - 495: Tarn Taran
</details>

<details>
  <summary> Rajasthan </summary>

  - 507: Ajmer
  - 512: Alwar
  - 519: Banswara
  - 516: Baran
  - 528: Barmer
  - 508: Bharatpur
  - 523: Bhilwara
  - 501: Bikaner
  - 514: Bundi
  - 521: Chittorgarh
  - 530: Churu
  - 511: Dausa
  - 524: Dholpur
  - 520: Dungarpur
  - 517: Hanumangarh
  - 505: Jaipur I
  - 506: Jaipur II
  - 527: Jaisalmer
  - 533: Jalore
  - 515: Jhalawar
  - 510: Jhunjhunu
  - 502: Jodhpur
  - 525: Karauli
  - 503: Kota
  - 532: Nagaur
  - 529: Pali
  - 522: Pratapgarh
  - 518: Rajsamand
  - 534: Sawai Madhopur
  - 513: Sikar
  - 531: Sirohi
  - 509: Sri Ganganagar
  - 526: Tonk
  - 504: Udaipur
</details>

<details>
  <summary> Sikkim </summary>

  - 535: East Sikkim
  - 537: North Sikkim
  - 538: South Sikkim
  - 536: West Sikkim
</details>

<details>
  <summary> Tamil Nadu </summary>

  - 779: Aranthangi
  - 555: Ariyalur
  - 578: Attur
  - 565: Chengalpet
  - 571: Chennai
  - 778: Cheyyar
  - 539: Coimbatore
  - 547: Cuddalore
  - 566: Dharmapuri
  - 556: Dindigul
  - 563: Erode
  - 552: Kallakurichi
  - 557: Kanchipuram
  - 544: Kanyakumari
  - 559: Karur
  - 780: Kovilpatti
  - 562: Krishnagiri
  - 540: Madurai
  - 576: Nagapattinam
  - 558: Namakkal
  - 577: Nilgiris
  - 564: Palani
  - 573: Paramakudi
  - 570: Perambalur
  - 575: Poonamallee
  - 546: Pudukkottai
  - 567: Ramanathapuram
  - 781: Ranipet
  - 545: Salem
  - 561: Sivaganga
  - 580: Sivakasi
  - 551: Tenkasi
  - 541: Thanjavur
  - 569: Theni
  - 554: Thoothukudi (Tuticorin)
  - 560: Tiruchirappalli
  - 548: Tirunelveli
  - 550: Tirupattur
  - 568: Tiruppur
  - 572: Tiruvallur
  - 553: Tiruvannamalai
  - 574: Tiruvarur
  - 543: Vellore
  - 542: Viluppuram
  - 549: Virudhunagar
</details>

<details>
  <summary> Telangana </summary>

  - 582: Adilabad
  - 583: Bhadradri Kothagudem
  - 581: Hyderabad
  - 584: Jagtial
  - 585: Jangaon
  - 586: Jayashankar Bhupalpally
  - 587: Jogulamba Gadwal
  - 588: Kamareddy
  - 589: Karimnagar
  - 590: Khammam
  - 591: Kumuram Bheem
  - 592: Mahabubabad
  - 593: Mahabubnagar
  - 594: Mancherial
  - 595: Medak
  - 596: Medchal
  - 612: Mulugu
  - 597: Nagarkurnool
  - 598: Nalgonda
  - 613: Narayanpet
  - 599: Nirmal
  - 600: Nizamabad
  - 601: Peddapalli
  - 602: Rajanna Sircilla
  - 603: Rangareddy
  - 604: Sangareddy
  - 605: Siddipet
  - 606: Suryapet
  - 607: Vikarabad
  - 608: Wanaparthy
  - 609: Warangal(Rural)
  - 610: Warangal(Urban)
  - 611: Yadadri Bhuvanagiri
</details>

<details>
  <summary> Tripura </summary>

  - 614: Dhalai
  - 615: Gomati
  - 616: Khowai
  - 617: North Tripura
  - 618: Sepahijala
  - 619: South Tripura
  - 620: Unakoti
  - 621: West Tripura
</details>

<details>
  <summary> Uttar Pradesh </summary>

  - 622: Agra
  - 623: Aligarh
  - 625: Ambedkar Nagar
  - 626: Amethi
  - 627: Amroha
  - 628: Auraiya
  - 646: Ayodhya
  - 629: Azamgarh
  - 630: Badaun
  - 631: Baghpat
  - 632: Bahraich
  - 633: Balarampur
  - 634: Ballia
  - 635: Banda
  - 636: Barabanki
  - 637: Bareilly
  - 638: Basti
  - 687: Bhadohi
  - 639: Bijnour
  - 640: Bulandshahr
  - 641: Chandauli
  - 642: Chitrakoot
  - 643: Deoria
  - 644: Etah
  - 645: Etawah
  - 647: Farrukhabad
  - 648: Fatehpur
  - 649: Firozabad
  - 650: Gautam Buddha Nagar
  - 651: Ghaziabad
  - 652: Ghazipur
  - 653: Gonda
  - 654: Gorakhpur
  - 655: Hamirpur
  - 656: Hapur
  - 657: Hardoi
  - 658: Hathras
  - 659: Jalaun
  - 660: Jaunpur
  - 661: Jhansi
  - 662: Kannauj
  - 663: Kanpur Dehat
  - 664: Kanpur Nagar
  - 665: Kasganj
  - 666: Kaushambi
  - 667: Kushinagar
  - 668: Lakhimpur Kheri
  - 669: Lalitpur
  - 670: Lucknow
  - 671: Maharajganj
  - 672: Mahoba
  - 673: Mainpuri
  - 674: Mathura
  - 675: Mau
  - 676: Meerut
  - 677: Mirzapur
  - 678: Moradabad
  - 679: Muzaffarnagar
  - 680: Pilibhit
  - 682: Pratapgarh
  - 624: Prayagraj
  - 681: Raebareli
  - 683: Rampur
  - 684: Saharanpur
  - 685: Sambhal
  - 686: Sant Kabir Nagar
  - 688: Shahjahanpur
  - 689: Shamli
  - 690: Shravasti
  - 691: Siddharthnagar
  - 692: Sitapur
  - 693: Sonbhadra
  - 694: Sultanpur
  - 695: Unnao
  - 696: Varanasi
</details>

<details>
  <summary> Uttarakhand </summary>

  - 704: Almora
  - 707: Bageshwar
  - 699: Chamoli
  - 708: Champawat
  - 697: Dehradun
  - 702: Haridwar
  - 709: Nainital
  - 698: Pauri Garhwal
  - 706: Pithoragarh
  - 700: Rudraprayag
  - 701: Tehri Garhwal
  - 705: Udham Singh Nagar
  - 703: Uttarkashi
</details>

<details>
  <summary> West Bengal </summary>

  - 710: Alipurduar District
  - 711: Bankura
  - 712: Basirhat HD (North 24 Parganas)
  - 713: Birbhum
  - 714: Bishnupur HD (Bankura)
  - 715: Cooch Behar
  - 783: COOCHBEHAR
  - 716: Dakshin Dinajpur
  - 717: Darjeeling
  - 718: Diamond Harbor HD (S 24 Parganas)
  - 719: East Bardhaman
  - 720: Hoogly
  - 721: Howrah
  - 722: Jalpaiguri
  - 723: Jhargram
  - 724: Kalimpong
  - 725: Kolkata
  - 726: Malda
  - 727: Murshidabad
  - 728: Nadia
  - 729: Nandigram HD (East Medinipore)
  - 730: North 24 Parganas
  - 731: Paschim Medinipore
  - 732: Purba Medinipore
  - 733: Purulia
  - 734: Rampurhat HD (Birbhum)
  - 735: South 24 Parganas
  - 736: Uttar Dinajpur
  - 737: West Bardhaman
</details>

<details>
  <summary> Daman&Diu </summary>

  - 138: Daman
  - 139: Diu

</details>

<details>
  <summary> Himachal Pradesh </summary>

  - 791: Chamba
  - 795: Kangra
  - 792: Kinnaur
  - 793: Mandi
  - 794: Shimla

</details>

## Developer Todo 
- Add option for Pin Code search
- Improve cli interface

### Sample Notification on Phone

<img src="https://github.com/abhinavdc/cowin-pinger/blob/main/img/notification-screenshot.jpg" width="300">



