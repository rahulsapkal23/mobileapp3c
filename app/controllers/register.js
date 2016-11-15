
function check_Register(e) {
  var payload={
    first_name:$.first_name.value,
    last_name:$.last_name.value,
      email_id:$.email_id.value,
        password:$.password.value,
          phone_no:$.phone_no.value,
          conform_password:$.conform_password.value,

  dob:$.dob.value,
  country:$.country.value,
  state:$.state.value,
  city:$.city.value,
  zipcode:$.zipcode.value,
  add1:$.add1.value,
  add2:$.add2.value,







  /*  rowId:"123",
    itemName:"ram"*/

  }
  var emailRE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
  var mobRE = /^\d{10}$/;
  var passwordRE = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,16}/;
  if($.first_name.value=="")
  {
    Ti.API.info("first name");
    alert("please fill first name");
  //  $.first_name.focusable=true;
  }
  else if ($.last_name.value=="") {
    Ti.API.info("last name");
    alert("please fill last name");
  }
  else if (emailRE.test($.email_id.value)==false) {
    Ti.API.info("email_id");
    alert("Invalid email_id");
  }
  else if (passwordRE.test($.password.value)==false) {
    Ti.API.info("password");
    alert("Password must be 1 lower 1 upper and 1 digit");
  }
  else if (mobRE.test($.phone_no.value)==false) {
    Ti.API.info("phone_no");
    alert("Phone No must be 10 digits");
   alert($.picker.value);
  }
  else if ($.picker.value=="2016-11-09 18:30:00 +0000") {
    Ti.API.info("dob");
    alert("please fill valid Date of Birth");
  }
/*  else if ($.country.value=="") {
    Ti.API.info("country");
    // alert("please fill country");
    alert($.picker.value);

  }*/
  else if ($.country.value=="") {
    Ti.API.info("country");
    // alert("please fill country");
    alert($.picker.value);

  }
  else if ($.state.value=="") {
    Ti.API.info("state");
    alert("please fill state");
  }
  else if ($.city.value=="") {
    Ti.API.info("city");
    alert("please fill city");
  }
  else if ($.zipcode.value=="") {
    Ti.API.info("zipcode");
    alert("please fill zipcode");
  }
  else if ($.add1.value=="") {
    Ti.API.info("add1");
    alert("please fill add1");
  }
  else if ($.add2.value=="") {
    Ti.API.info("add2");
    alert("please fill add2");
  }
    Ti.API.info("by");
    alert("byyy");
  }
  //var w=Alloy.createController('regDetil',payload).getView();
  //w.open();

/*
var dialog = Ti.UI.createAlertDialog({
     cancel: 1,
     buttonNames: ['Confirm', 'Cancel'],
     message: 'Confirm delete?',
     title: 'Delete'
  });

 dialog.addEventListener('click', function(e){
   if (e.index === e.source.cancel){
     log("Delete cancelled. Keeping " + testData[row_index].title +
         "\n\nTable Data after cancel: " + JSON.stringify( table.sections[0].getRows() ) +
         "\n\nTest data: " + JSON.stringify( testData ) +
         "\n\nForce pushing the vanished row I choose to keep back into table data");
     var restored = table.sections[0].getRows();
     restored.splice(row_index, 0, row_bkup);
     table.setData(restored);

   } else if (e.index === 0) {
     log( testData.splice(row_index, 1) + " Deleted!" + "\n\nTable data: " +
          JSON.stringify( table.sections[0].getRows() ) +
          "\n\nTest data: " + JSON.stringify( testData ));
   }
 });
 dialog.show();
});
*/




var opts = {
  options:[

        "Patna","Indore",  "Thane","Bhopal",
         "Visakhapatnam",  "Vadodara","Firozabad",  "Ludhiana","Rajkot",
         "Agra",  "Siliguri",  "Nashik","Faridabad","Patiala","Meerut",
          "Kalyan-Dombivali","Vasai-Virar","Varanasi",  "Srinagar",
           "Dhanbad","Jodhpur","Amritsar","Raipur","Allahabad",
            "Coimbatore",  "Jabalpur",  "Gwalior",  "Vijayawada",
             "Madurai",  "Guwahati","Chandigarh","Hubli-Dharwad","Amroha",
              "Moradabad",  "Gurgaon","Aligarh",  "Solapur","Ranchi",
              "Jalandhar","Tiruchirappalli",  "Bhubaneswar","Salem",
               "Warangal","Mira-Bhayandar","Thiruvananthapuram","Bhiwandi",
               "Saharanpur",  "Guntur",  "Amravati","Bikaner","Noida",
               "Jamshedpur","Bhilai Nagar","Cuttack","Kochi","Udaipur",
               "Bhavnagar","Dehradun","Asansol",  "Nanded-Waghala","Ajmer",
               "Jamnagar","Ujjain",  "Sangli","Loni",  "Jhansi",
                "Pondicherry","Nellore",  "Jammu",  "Belagavi"
                //"Raurkela","Mangaluru","Tirunelveli",  "Malegaon","Gaya","Tiruppur",  "Davanagere","Kozhikode","Akola","Kurnool",  "Bokaro Steel City","Rajahmundry",  "Ballari","Agartala","Bhagalpur","Latur","Dhule","Korba","Bhilwara","Brahmapur","Mysore","Muzaffarpur","Ahmednagar","Kollam","Raghunathganj",  "Bilaspur","Shahjahanpur",  "Thrissur","Alwar","Kakinada",  "Nizamabad","Sagar",  "Tumkur","Hisar","Rohtak","Panipat","Darbhanga","Kharagpur",  "Aizawl","Ichalkaranji","Tirupati",  "Karnal","Bathinda","Rampur",  "Shivamogga","Ratlam",  "Modinagar",  "Durg","Shillong","Imphal","Hapur",  "Ranipet",  "Anantapur",  "Arrah","Karimnagar","Parbhani","Etawah",  "Bharatpur","Begusarai","New Delhi","Chhapra","Kadapa",  "Ramagundam","Pali","Satna",  "Vizianagaram",  "Katihar","Hardwar","Sonipat","Nagercoil",  "Thanjavur",  "Murwara (Katni)",  "Naihati",  "Sambhal",  "Nadiad","Yamunanagar","English Bazar",  "Eluru",  "Munger","Panchkula","Raayachuru","Panvel","Deoghar","Ongole",  "Nandyal",  "Morena",  "Bhiwani","Porbandar","Palakkad","Anand","Purnia","Baharampur",  "Barmer","Morvi","Orai",  "Bahraich",  "Sikar","Vellore",  "Singrauli",  "Khammam","Mahesana","Silchar","Sambalpur","Rewa",  "Unnao",  "Hugli-Chinsurah",  "Raiganj",  "Phusro","Adityapur","Alappuzha","Bahadurgarh","Machilipatnam",  "Rae Bareli",  "Jalpaiguri",  "Bharuch","Pathankot","Hoshiarpur","Baramula",  "Adoni",  "Jind","Tonk","Tenali",  "Kancheepuram",  "Vapi","Sirsa","Navsari","Mahbubnagar","Puri","Robertson Pet","Erode",  "Batala","Haldwani-cum-Kathgodam","Vidisha",  "Saharsa","Thanesar","Chittoor",  "Veraval","Lakhimpur",  "Sitapur",  "Hindupur",  "Santipur",  "Balurghat",  "Ganjbasoda",  "Moga","Proddatur",  "Srinagar","Medinipur",  "Habra",  "Sasaram","Hajipur","Bhuj","Shivpuri",  "Ranaghat",  "Shimla",  "Tiruvannamalai",  "Kaithal","Rajnandgaon","Godhra","Hazaribag","Bhimavaram",  "Mandsaur",  "Dibrugarh","Kolar","Bankura",  "Mandya","Dehri-on-Sone","Madanapalle",  "Malerkotla","Lalitpur",  "Bettiah","Pollachi",  "Khanna","Neemuch",  "Palwal","Palanpur","Guntakal",  "Nabadwip",  "Udupi","Jagdalpur","Motihari","Pilibhit",  "Dimapur","Mohali","Sadulpur","Rajapalayam",  "Dharmavaram",  "Kashipur","Sivakasi",  "Darjiling",  "Chikkamagaluru","Gudivada",  "Baleshwar Town","Mancherial","Srikakulam",  "Adilabad","Yavatmal","Barnala","Nagaon","Narasaraopet",  "Raigarh","Roorkee","Valsad","Ambikapur","Giridih","Chandausi",  "Purulia",  "Patan","Bagaha","Hardoi ",  "Achalpur","Osmanabad","Deesa","Nandurbar","Azamgarh",  "Ramgarh","Firozpur","Baripada Town","Karwar","Siwan","Rajampet",  "Pudukkottai",  "Anantnag",  "Tadpatri",  "Satara","Bhadrak","Kishanganj","Suryapet","Wardha","Ranebennuru","Amreli","Neyveli (TS)",  "Jamalpur","Marmagao","Udgir","Tadepalligudem",  "Nagapattinam",  "Buxar","Aurangabad","Jehanabad","Phagwara","Khair",  "Sawai Madhopur","Kapurthala","Chilakaluripet",  "Aurangabad","Malappuram","Rewari","Nagaur","Sultanpur",  "Nagda",  "Port Blair",  "Lakhisarai","Panaji","Tinsukia","Itarsi",  "Kohima","Balangir","Nawada","Jharsuguda","Jagtial","Viluppuram",  "Amalner","Zirakpur","Tanda",  "Tiruchengode",  "Nagina",  "Yemmiganur",  "Vaniyambadi",  "Sarni",  "Theni Allinagaram",  "Margao","Akot","Sehore",  "Mhow Cantonment",  "Kot Kapura","Makrana","Pandharpur","Miryalaguda","Shamli",  "Seoni",  "Ranibennur","Kadiri",  "Shrirampur","Rudrapur","Parli","Najibabad",  "Nirmal","Udhagamandalam",  "Shikohabad",  "Jhumri Tilaiya","Aruppukkottai",  "Ponnani","Jamui","Sitamarhi","Chirala",  "Anjar","Karaikal","Hansi","Anakapalle",  "Mahasamund","Faridkot","Saunda","Dhoraji","Paramakudi",  "Balaghat",  "Sujangarh","Khambhat","Muktsar","Rajpura","Kavali",  "Dhamtari","Ashok Nagar",  "Sardarshahar","Mahuva","Bargarh","Kamareddy","Sahibganj","Kothagudem","Ramanagaram","Gokak","Tikamgarh",  "Araria","Rishikesh","Shahdol",  "Medininagar (Daltonganj)","Arakkonam",  "Washim","Sangrur","Bodhan","Fazilka","Palacole",  "Keshod","Sullurpeta",  "Wadhwan","Gurdaspur","Vatakara","Tura","Narnaul","Kharar","Yadgir","Ambejogai","Ankleshwar","Savarkundla","Paradip","Virudhachalam",  "Kanhangad","Kadi","Srivilliputhur",  "Gobindgarh","Tindivanam",  "Mansa","Taliparamba","Manmad","Tanuku",  "Rayachoti",  "Virudhunagar",  "Koyilandy","Jorhat","Karur",  "Valparai",  "Srikalahasti",  "Neyyattinkara","Bapatla",  "Fatehabad","Malout","Sankarankovil",  "Tenkasi",  "Ratnagiri","Rabkavi Banhatti","Sikandrabad",  "Chaibasa","Chirmiri","Palwancha","Bhawanipatna","Kayamkulam","Pithampur",  "Nabha","Shahabad, Hardoi",  "Dhenkanal","Uran Islampur","Gopalganj","Bongaigaon City","Palani",  "Pusad","Sopore",  "Pilkhuwa",  "Tarn Taran","Renukoot",  "Mandamarri","Shahabad","Barbil","Koratla","Madhubani","Arambagh",  "Gohana","Ladnu","Pattukkottai",  "Sirsi","Sircilla","Tamluk",  "Jagraon","AlipurdUrban Agglomerationr",  "Alirajpur",  "Tandur","Naidupet",  "Tirupathur",  "Tohana","Ratangarh","Dhubri","Masaurhi","Visnagar","Vrindavan",  "Nokha","Nagari",  "Narwana","Ramanathapuram",  "Ujhani",  "Samastipur","Laharpur",  "Sangamner","Nimbahera","Siddipet","Suri",  "Diphu","Jhargram",  "Shirpur-Warwade","Tilhar",  "Sindhnur","Udumalaipettai",  "Malkapur","Wanaparthy","Gudur",  "Kendujhar","Mandla",  "Mandi",  "Nedumangad","North Lakhimpur","Vinukonda",  "Tiptur","Gobichettipalayam",  "Sunabeda","Wani","Upleta","Narasapuram",  "Nuzvid",  "Tezpur","Una","Markapur",  "Sheopur",  "Thiruvarur",  "Sidhpur","Sahaswan",  "Suratgarh","Shajapur",  "Rayagada","Lonavla","Ponnur",  "Kagaznagar","Gadwal","Bhatapara","Kandukur",  "Sangareddy","Unjha","Lunglei","Karimganj","Kannur","Bobbili",  "Mokameh","Talegaon Dabhade","Anjangaon","Mangrol","Sunam","Gangarampur",  "Thiruvallur",  "Tirur","Rath",  "Jatani","Viramgam","Rajsamand","Yanam","Kottayam","Panruti",  "Dhuri","Namakkal",  "Kasaragod","Modasa","Rayadurg",  "Supaul","Kunnamkulam","Umred","Bellampalle","Sibsagar","Mandi Dabwali","Ottappalam","Dumraon","Samalkot",  "Jaggaiahpet",  "Goalpara","Tuni",  "Lachhmangarh","Bhongir","Amalapuram",  "Firozpur Cantt.","Vikarabad","Thiruvalla","Sherkot",  "Palghar","Shegaon","Jangaon","Bheemunipatnam",  "Panna",  "Thodupuzha","KathUrban Agglomeration",  "Palitana","Arwal","Venkatagiri",  "Kalpi",  "Rajgarh (Churu)","Sattenapalle",  "Arsikere","Ozar","Thirumangalam",  "Petlad","Nasirabad","Phaltan","Rampurhat",  "Nanjangud","Forbesganj","Tundla",  "BhabUrban Agglomeration","Sagara","Pithapuram",  "Sira","Bhadrachalam","Charkhi Dadri","Chatra","Palasa Kasibugga",  "Nohar","Yevla","Sirhind Fatehgarh Sahib","Bhainsa","Parvathipuram",  "Shahade","Chalakudy","Narkatiaganj","Kapadvanj","Macherla",  "Raghogarh-Vijaypur",  "Rupnagar","Naugachhia","Sendhwa",  "Byasanagar","Sandila",  "Gooty",  "Salur",  "Nanpara",  "Sardhana",  "Vita","Gumia","Puttur","Jalandhar Cantt.","Nehtaur",  "Changanassery","Mandapeta",  "Dumka","Seohara",  "Umarkhed","Madhupur","Vikramasingapuram",  "Punalur","Kendrapara","Sihor","Nellikuppam",  "Samana","Warora","Nilambur","Rasipuram",  "Ramnagar","Jammalamadugu",  "Nawanshahr","Thoubal","Athni","Cherthala","Sidhi",  "Farooqnagar","Peddapuram",  "Chirkunda","Pachora","Madhepura","Pithoragarh","Tumsar","Phalodi","Tiruttani",  "Rampura Phul","Perinthalmanna","Padrauna",  "Pipariya",  "Dalli-Rajhara","Punganur",  "Mattannur","Mathura",  "Thakurdwara",  "Nandivaram-Guduvancheri",  "Mulbagal","Manjlegaon","Wankaner","Sillod","Nidadavole",  "Surapura","Rajagangapur","Sheikhpura","Parlakhemundi","Kalimpong",  "Siruguppa","Arvi","Limbdi","Barpeta","Manglaur","Repalle",  "Mudhol","Shujalpur",  "Mandvi","Thangadh","Sironj",  "Nandura","Shoranur","Nathdwara","Periyakulam",  "Sultanganj","Medak","Narayanpet","Raxaul Bazar","Rajauri",  "Pernampattu",  "Nainital","Ramachandrapuram",  "Vaijapur","Nangal","Sidlaghatta","Punch",  "Pandhurna",  "Wadgaon Road","Talcher","Varkala","Pilani","Nowgong",  "Naila Janjgir","Mapusa","Vellakoil",  "Merta City","Sivaganga",  "Mandideep",  "Sailu","Vyara","Kovvur",  "Vadalur",  "Nawabganj",  "Padra","Sainthia",  "Siana",  "Shahpur","Sojat","Noorpur",  "Paravoor","Murtijapur","Ramnagar","Sundargarh","Taki",  "Saundatti-Yellamma","Pathanamthitta","Wadi","Rameshwaram",  "Tasgaon","Sikandra Rao",  "Sihora",  "Tiruvethipuram",  "Tiruvuru",  "Mehkar","Peringathur","Perambalur",  "Manvi","Zunheboto","Mahnar Bazar","Attingal","Shahbad","Puranpur",  "Nelamangala","Nakodar","Lunawada","Murshidabad",  "Mahe","Lanka","Rudauli",  "Tuensang","Lakshmeshwar","Zira","Yawal","Thana Bhawan",  "Ramdurg","Pulgaon","Sadasivpet","Nargund","Neem-Ka-Thana","Memari",  "Nilanga","Naharlagun",  "Pakaur","Wai","Tarikere","Malavalli","Raisen",  "Lahar",  "Uravakonda",  "Savanur","Sirohi","Udhampur",  "Umarga","Pratapgarh","Lingsugur","Usilampatti",  "Palia Kalan",  "Wokha","Rajpipla","Vijayapura","Rawatbhata","Sangaria","Paithan","Rahuri","Patti","Zaidpur",  "Lalsot","Maihar",  "Vedaranyam",  "Nawapur","Solan",  "Vapi","Sanawad",  "Warisaliganj","Revelganj","Sabalgarh",  "Tuljapur","Simdega","Musabani","Kodungallur","Phulabani","Umreth","Narsipatnam",  "Nautanwa",  "Rajgir","Yellandu","Sathyamangalam",  "Pilibanga","Morshi","Pehowa","Sonepur","Pappinisseri","Zamania",  "Mihijam","Purna","Puliyankudi",  "Shikarpur, Bulandshahr",  "Umaria",  "Porsa",  "Naugawan Sadat",  "Fatehpur Sikri",  "Manuguru","Udaipur","Pipar City","Pattamundai","Nanjikottai",  "Taranagar","Yerraguntla",  "Satana","Sherghati","Sankeshwara","Madikeri","Thuraiyur",  "Sanand","Rajula","Kyathampalle","Shahabad, Rampur",  "Tilda Newra","Narsinghgarh",  "Chittur-Thathamangalam","Malaj Khand",  "Sarangpur",  "Robertsganj",  "Sirkali",  "Radhanpur","Tiruchendur",  "Utraula",  "Patratu","Vijainagar, Ajmer","Periyasemur",  "Pathri","Sadabad",  "Talikota","Sinnar","Mungeli","Sedam","Shikaripur","Sumerpur","Sattur",  "Sugauli","Lumding","Vandavasi",  "Titlagarh","Uchgaon","Mokokchung","Paschim Punropara",  "Sagwara","Ramganj Mandi","Tarakeswar",  "Mahalingapura","Dharmanagar","Mahemdabad","Manendragarh","Uran","Tharamangalam",  "Tirukkoyilur",  "Pen","Makhdumpur","Maner","Oddanchatram",  "Palladam",  "Mundi",  "Nabarangapur","Mudalagi","Samalkha","Nepanagar",  "Karjat","Ranavav","Pedana",  "Pinjore","Lakheri","Pasan",  "Puttur",  "Vadakkuvalliyur",  "Tirukalukundram",  "Mahidpur",  "Mussoorie","Muvattupuzha","Rasra",  "Udaipurwati","Manwath","Adoor","Uthamapalayam",  "Partur","Nahan",  "Ladwa","Mankachar","Nongstoin","Losal","Sri Madhopur","Ramngarh","Mavelikkara","Rawatsar","Rajakhera","Lar",  "Lal Gopalganj Nindaura",  "Muddebihal","Sirsaganj",  "Shahpura","Surandai",  "Sangole","Pavagada","Tharad","Mansa","Umbergaon","Mavoor","Nalbari","Talaja","Malur","Mangrulpir","Soro","Shahpura","Vadnagar","Raisinghnagar","Sindhagi","Sanduru","Sohna","Manavadar","Pihani",  "Safidon","Risod","Rosera","Sankari",  "Malpura","Sonamukhi",  "Shamsabad, Agra",  "Nokha","PandUrban Agglomeration",  "Mainaguri",  "Afzalpur","Shirur","Salaya","Shenkottai",  "Pratapgarh","Vadipatti",  "Nagarkurnool","Savner","Sasvad","Rudrapur",  "Soron",  "Sholingur",  "Pandharkaoda","Perumbavoor","Maddur","Nadbai","Talode","Shrigonda","Madhugiri","Tekkalakote","Seoni-Malwa",  "Shirdi","SUrban Agglomerationr",  "Terdal","Raver","Tirupathur",  "Taraori","Mukhed","Manachanallur",  "Rehli",  "Sanchore","Rajura","Piro","Mudabidri","Vadgaon Kasba","Nagar","Vijapur","Viswanatham",  "Polur",  "Panagudi",  "Manawar",  "Tehri","Samdhan",  "Pardi","Rahatgarh",  "Panagar",  "Uthiramerur",  "Tirora","Rangia","Sahjanwa",  "Wara Seoni",  "Magadi","Rajgarh (Alwar)","Rafiganj","Tarana",  "Rampur Maniharan",  "Sheoganj","Raikot","Pauri","Sumerpur",  "Navalgund","Shahganj",  "Marhaura","Tulsipur",  "Sadri","Thiruthuraipoondi",  "Shiggaon","Pallapatti",  "Mahendragarh","Sausar",  "Ponneri",  "Mahad","Lohardaga","Tirwaganj",  "Margherita","Sundarnagar",  "Rajgarh",  "Mangaldoi","Renigunta",  "Longowal","Ratia","Lalgudi",  "Shrirangapattana","Niwari",  "Natham",  "Unnamalaikadai",  "PurqUrban Agglomerationzi",  "Shamsabad, Farrukhabad",  "Mirganj","Todaraisingh","Warhapur",  "Rajam",  "Urmar Tanda","Lonar","Powayan",  "P.N.Patti",  "Palampur",  "Srisailam Project (Right Flank Colony) Township",  "Sindagi","Sandi",  "Vaikom","Malda",  "Tharangambadi",  "Sakaleshapura","Lalganj","Malkangiri","Rapar","Mauganj",  "Todabhim","Srinivaspur","Murliganj","Reengus","Sawantwadi","Tittakudi",  "Lilong","Rajaldesar","Pathardi","Achhnera",  "Pacode",  "Naraura",  "Nakur",  "Palai","Morinda, India","Manasa",  "Nainpur",  "Sahaspur",  "Pauni","Prithvipur",  "Ramtek","Silapathar","Songadh","Safipur",  "Sohagpur",  "Mul","Sadulshahar","Phillaur","Sambhar","Prantij","Nagla","Pattran","Mount Abu","Reoti",  "Tenu dam-cum-Kathhara","Panchla",  "Sitarganj","Pasighat",  "Motipur","O' Valley",  "Raghunathpur",  "Suriyampalayam",  "Qadian","Rairangpur","Silvassa",  "Nowrozabad (Khodargama)",  "Mangrol","Soyagaon","Sujanpur","Manihari","Sikanderpur",  "Mangalvedhe","Phulera","Ron","Sholavandan",  "Saidpur",  "Shamgarh",  "Thammampatti",  "Maharajpur",  "Multai",  "Mukerian","Sirsi",  "Purwa",  "Sheohar","Namagiripettai",  "Parasi",  "Lathi","Lalganj",  "Narkhed","Mathabhanga",  "Shendurjana","Peravurani",  "Mariani","Phulpur",  "Rania","Pali",  "Pachore",  "Parangipettai",  "Pudupattinam",  "Panniyannur","Maharajganj","Rau",  "Monoharpur",  "Mandawa","Marigaon","Pallikonda",  "Pindwara","Shishgarh",  "Patur","Mayang Imphal","Mhowgaon",  "Guruvayoor","Mhaswad","Sahawar",  "Sivagiri",  "Mundargi","Punjaipugalur",  "Kailasahar","Samthar",  "Sakti","Sadalagi","Silao","Mandalgarh","Loha","Pukhrayan",  "Padmanabhapuram",  "Belonia","Saiha","Srirampore",  "Talwara","Puthuppally","Khowai","Vijaypur",  "Takhatgarh","Thirupuvanam",  "Adra",  "Piriyapatna","Obra",  "Adalaj","Nandgaon","Barh","Chhapra","Panamattom","Niwai",  "Bageshwar","Tarbha","Adyar","Narsinghgarh",  "Warud","Asarganj","S
      ] };
    function dropdown1(e)
    {
        $.dialog.setOptions(opts.options);
           $.dialog.show();
           Ti.API.info("selectedIndex"+$.dialog);
           Ti.API.info(JSON.stringify($.dialog));
           $.dialog.addEventListener('click',function(e){
           Ti.API.info("ssnasjsnds");
           //Ti.API.info("selecte e ::::"+JSON.stringify(e));
           Ti.API.info("index"+e.index);
            Ti.API.info("city"+e.source.options[e.index]);
            $.state.value=e.source.options[e.index];
          //  Ti.API.info("selecte city ::::"+JSON.stringify(e.source.options));
               });


}

/*dialog.addEventListener('click',function(e,options){
  Ti.API.info("ssnasjsnds");

  Ti.API.info(e);
      Ti.API.info(JSON.stringify(options));
     //Ti.API.info(options);

    Ti.API.info(JSON.stringify(e));
   // Ti.API.info("Inside listener: " + e.selectedIndex);
   // win.close();
});*/


/*
function dropdown(e) {



  Ti.UI.backgroundColor = 'white';


  var view = Titanium.UI.createView({
     borderRadius:10,
     backgroundColor:'yellow',
     layout: 'vertical',
     top:600,
     width:300,
     height:200
  });
  $.win.add(view);


  var picker = Ti.UI.createPicker({

  });
  var data = [];
  data[0]=Ti.UI.createPickerRow({title:'Maharashtra'});
  data[1]=Ti.UI.createPickerRow({title:'Gujrat'});
  data[2]=Ti.UI.createPickerRow({title:'MP'});
  data[3]=Ti.UI.createPickerRow({title:'UP'});

  picker.add(data);
  picker.selectionIndicator = true;

  view.add(picker);

  var button = Titanium.UI.createButton({
     title: 'Set',

   backgroundColor:'pink',
   width:320,
     height: 50
  });
  button.addEventListener('click',function(e)
  {
     Titanium.API.info("You clicked the button"+state);
     $.state.value=state;
     win.close();
  });
  view.add(button);
  //win.open();

  // must be after picker has been displayed
//  picker.setSelectedRow(0, 2, false); // select Mangos
//country
var state;
picker.addEventListener('change',function(e){
   Ti.API.info(JSON.stringify(e));

  Ti.API.info("User selected date: " + e.row.title);
   state=e.row.title;
});



}
*/
function goto_back() {
   $.win.close();
}
function cleartext(e){
  e.source.value=" ";
}
function clickMale() {
  $.male.text="\uf111";
    $.female.text="\uf1db";

}
function clickFemale() {
  $.female.text="\uf111";
    $.male.text="\uf1db";


}
function clickCheck() {
  if($.check.text=="\uf0c8")
  {
    $.check.text="\uf14a";
  }
  else {
      $.check.text="\uf0c8";
  }


}


function datepicker_on(e) {
$.dob.value="";
  $.picker.opacity="0.75";
}
function report(e) {
    Ti.API.info("fjdhfjdfjsj");
    Ti.API.info('User selected: ' + e.value);
    Ti.API.info("1548445");
      $.dob.value=e.value;
        $.picker.opacity="0";


}
/*
function select_picker() {
  alert("dsfdf");

Ti.UI.backgroundColor = 'white';

var picker = Ti.UI.createPicker({
  type:Ti.UI.PICKER_TYPE_DATE,
  minDate:new Date(2009,0,1),
  maxDate:new Date(2014,11,31),

  value:new Date(2014,3,12)
});


}*/

/*
var pattern = /^\d{10}$/;

var pattern = /^\d{6,8}$/;

var pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;

var pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,16}/;
pattern.test(d)




*/
