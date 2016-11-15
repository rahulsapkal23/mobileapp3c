
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


var opts={
  "Countries": [
    {
      "Name": "USA",
      "States": [
        {
          "Name": "USA-State1",
          "Cities": [
            "USA-State1-city1",
            "USA-State1-city2",
            "USA-State1-city3"
          ]
        },
        {
          "Name": "USA-State2",
          "Cities": [
            "USA-State2-city4",
            "USA-State2-city5",
            "USA-State2-city6"
          ]
        },
        {
          "Name": "USA-State3",
          "Cities": [
            "USA-State3-city7",
            "USA-State3-city8",
            "USA-State3-city9"
          ]
        }
      ]
    },
    {
      "Name": "IND",
      "States": [
        {
          "Name": "IND-State1",
          "Cities": [
            "IND-State1-city1",
            "IND-State1-city2",
            "IND-State1-city3"
          ]
        },
        {
          "Name": "IND-State2",
          "Cities": [
            "IND-State2-city4",
            "IND-State2-city5",
            "IND-State2-city6"
          ]
        },
        {
          "Name": "IND-State3",
          "Cities": [
            "IND-State3-city7",
            "IND-State3-city8",
            "IND-State3-city9"
          ]
        }
      ]
    },
    {
      "Name": "AUS",
      "States": [
        {
          "Name": "AUS-State1",
          "Cities": [
            "AUS-State1-city1",
            "AUS-State1-city2",
            "AUS-State1-city3"
          ]
        },
        {
          "Name": "AUS-State2",
          "Cities": [
            "AUS-State2-city4",
            "AUS-State2-city5",
            "AUS-State2-city6"
          ]
        },
        {
          "Name": "AUS-State3",
          "Cities": [
            "AUS-State3-city7",
            "AUS-State3-city8",
            "AUS-State3-city9"
          ]
        }
      ]
    }

  ]
}




/*
var opts = {
  INDIA:[

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
      ],
      USA:[
        "Alabama",
"Alaska",
"American Samoa",
"Arizona",
"Arkansas",
"California",
"Colorado",
"Connecticut",
"Delaware",
"District Of Columbia",
"Federated States Of Micronesia",
"Florida",
"Georgia",
"Guam",
"Hawaii",
"Idaho",
"Illinois",
"Indiana",
"Iowa",
"Kansas",
"Kentucky",
"Louisiana",
"Maine",
"Marshall Islands",
"Maryland",
"Massachusetts",
"Michigan",
"Minnesota",
"Mississippi",
"Missouri",
"Montana",
"Nebraska",
"Nevada",
"New Hampshire",
"New Jersey",
"New Mexico",
"New York",
"North Carolina",
"North Dakota",
"Northern Mariana Islands",
"Ohio",
"Oklahoma",
"Oregon",
"Palau",
"Pennsylvania",
"Puerto Rico",
"Rhode Island",
"South Carolina",
"South Dakota",
"Tennessee",
"Texas",
"Utah",
"Vermont",
"Virgin Islands",
"Virginia",
"Washington",
"West Virginia",
"Wisconsin",
"Wyoming"

          ]
     };
*/



     function dropdowncountry(e)
     {
            Ti.API.info("ssnasjsnds"+opts.Countries[0].Name);
            /*\
            {
              "Name": "AUS",
              "States": [
                {
                  "Name": "AUS-State1",
                  "Cities": [
                    "AUS-State1-city1",
                    "AUS-State1-city2",
                    "AUS-State1-city3"
                  ]
                },
                {
                  "Name": "AUS-State2",
                  "Cities": [
                    "AUS-State2-city4",
                    "AUS-State2-city5",
                    "AUS-State2-city6"
                  ]
                },
                {
                  "Name": "AUS-State3",
                  "Cities": [
                    "AUS-State3-city7",
                    "AUS-State3-city8",
                    "AUS-State3-city9"
                  ]
                }
              ]
            }
            */
            $.countrydialog.setOptions([opts.Countries[0].Name,opts.Countries[1].Name,opts.Countries[2].Name]);
            $.countrydialog.show();
            $.countrydialog.addEventListener('click',function(e){
                    Ti.API.info("ssnasjsnds");
                    Ti.API.info("index"+e.index);
                      Ti.API.info("index14521451"+JSON.stringify(e));
                    Ti.API.info("city"+JSON.stringify(e.source.options));
                    if (e.index==0) {
                        $.country.value="INDIA";
                    }
                    else {
                      $.country.value="USA";
                    }

              });
       }


    function dropdownstate(e)
    {
            if ($.country="INDIA") {
                      $.statedialog.setOptions(opts.INDIA);
                      $.statedialog.show();
                      $.statedialog.addEventListener('click',function(e){
                                $.state.value=e.source.options[e.index];
             });
      }
      else if ($.country=="USA") {
        $.dialog.setOptions(opts.USA);
      //  alert("usa");
           $.dialog.show();
           Ti.API.info("selectedIndex"+$.dialog);
           Ti.API.info(JSON.stringify($.dialog));
           $.dialog.addEventListener('click',function(e){
           Ti.API.info("ssnasjsnds");
           //Ti.API.info("selecte e ::::"+JSON.stringify(e));
           Ti.API.info("index"+e.index);
            Ti.API.info("city"+e.source.options[e.index]);
            $.state.value=e.source.options[e.index];
             });
      }

}
function dropdowncity() {

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
