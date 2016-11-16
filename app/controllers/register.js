
function check_Register(e) {
  /*var payload={
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



}*/
  var emailRE = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/;
  var mobRE = /^\d{10}$/;
    var zipRE = /^\d{6}$/;
  var passwordRE = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]){6,16}/;
  if($.first_name.value=="")
  {
    $.viewfirst_name.backgroundColor="blue";
    alert("please fill first name");
  }
  else if ($.last_name.value=="") {
      $.viewfirst_name.backgroundColor="transprent";
      $.viewlast_name.backgroundColor="blue";
    alert("please fill last name");
  }
  else if (emailRE.test($.email_id.value)==false) {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="blue";
    alert("Invalid email_id");
  }
  else if (passwordRE.test($.password.value)==false) {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="blue";
    alert("Password must be 1 lower 1 upper and 1 digit");
  }
  else if ($.password.value!=$.conform_password.value) {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="blue";
    alert("Password is not matched");
  }
  else if (mobRE.test($.phone_no.value)==false) {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="blue";
    alert("Phone No must be 10 digits");

  }
  else if ($.picker.value=="2016-11-09 18:30:00 +0000") {
    Ti.API.info("dob");
    alert("please fill valid Date of Birth");
  }

else if ($.male.text=="\uf1db" && $.female.text=="\uf1db") {
  $.viewfirst_name.backgroundColor="transprent";
  $.viewlast_name.backgroundColor="transprent";
    $.viewemail_id.backgroundColor="transprent";
    $.viewpassword.backgroundColor="transprent";
    $.viewconform_password.backgroundColor="transprent";
    $.viewphone_no.backgroundColor="transprent";
    $.viewGender.backgroundColor="blue";
   alert("please Select Gender");

}
  else if ($.country.value=="") {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="transprent";
      $.viewGender.backgroundColor="transprent";
      $.viewcountry.backgroundColor="blue";
     alert("please fill country");

  }
  else if ($.state.value=="") {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="transprent";
      $.viewGender.backgroundColor="transprent";
      $.viewcountry.backgroundColor="transprent";
      $.viewstate.backgroundColor="blue";
    alert("please fill state");
  }
  else if ($.city.value=="") {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="transprent";
      $.viewGender.backgroundColor="transprent";
      $.viewcountry.backgroundColor="transprent";
      $.viewstate.backgroundColor="transprent";
      $.viewcity.backgroundColor="blue";
    alert("please fill city");
  }
  else if (zipRE.test($.zipcode.value)==false) {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="transprent";
      $.viewGender.backgroundColor="transprent";
      $.viewcountry.backgroundColor="transprent";
      $.viewstate.backgroundColor="transprent";
      $.viewcity.backgroundColor="transprent";
      $.viewzipcode.backgroundColor="blue";
    alert("zipcode must be 6 digits");
  }
  else if ($.add1.value=="") {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="transprent";
      $.viewGender.backgroundColor="transprent";
      $.viewcountry.backgroundColor="transprent";
      $.viewstate.backgroundColor="transprent";
      $.viewcity.backgroundColor="transprent";
      $.viewzipcode.backgroundColor="transprent";
      $.viewadd1.backgroundColor="blue";
    alert("please fill add1");
  }

  else if ($.check.text=="\uf0c8") {
    $.viewfirst_name.backgroundColor="transprent";
    $.viewlast_name.backgroundColor="transprent";
      $.viewemail_id.backgroundColor="transprent";
      $.viewpassword.backgroundColor="transprent";
      $.viewconform_password.backgroundColor="transprent";
      $.viewphone_no.backgroundColor="transprent";
      $.viewGender.backgroundColor="transprent";
      $.viewcountry.backgroundColor="transprent";
      $.viewstate.backgroundColor="transprent";
      $.viewcity.backgroundColor="transprent";
      $.viewzipcode.backgroundColor="transprent";
      $.viewadd1.backgroundColor="transprent";
      $.viewcheck.backgroundColor="blue";
    alert("please check out Terms and conditions");
  }

    $.viewcheck.backgroundColor="transprent";
    alert("Congradulations Your Registration is Successful !");
  }



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
function BirthdayPicker() {
  Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
  exitOnClose: true,
  layout: 'vertical'
});

var picker = Ti.UI.createPicker({
  type:Ti.UI.PICKER_TYPE_DATE,
  minDate:new Date(2009,0,1),
  maxDate:new Date(2014,11,31),
  value:new Date(2014,3,12),
  top:50
});

win.add(picker);
win.open();

picker.addEventListener('change',function(e){
  Ti.API.info("User selected date: " + e.value.toLocaleString());
});
}
     function dropdowncountry(e)
     {
            Ti.API.info("rrrrr");
            $.state.text="Select State";
            $.city.text="Select City";
            $.countrydialog.setOptions([opts.Countries[0].Name,
              opts.Countries[1].Name,
              opts.Countries[2].Name,"Cancel"]);
            $.countrydialog.show();
            $.countrydialog.addEventListener('click',function(e){
                    if (e.index==0) {
                        $.country.text="USA";
                    }
                    else if (e.index==1) {
                        $.country.text="INDIA";
                    }
                    else if(e.index==2) {
                      $.country.text="AUS";
                    }
                    else {
                        $.country.text="Select Country"
                    }

              });
       }


    function dropdownstate(e)
    {
      $.city.text="Select City";
      if ($.country.text=="Select Country") {
           alert("please fill country First");
         }
        else    if ($.country.text=="INDIA") {
                      $.statedialog.setOptions([
                                    opts.Countries[1].States[0].Name,
                                    opts.Countries[1].States[1].Name,
                                    opts.Countries[1].States[2].Name,"Cancel"
                                  ]);
                        $.statedialog.show();
                        $.statedialog.addEventListener('click',function(e)
                        {
                          if (e.index==3) {
                            $.state.text="Select State"
                          } else {
                              $.state.text=e.source.options[e.index];
                          }
             });
      }
      else if ($.country.text=="USA")
        {
          $.statedialog.setOptions([opts.Countries[0].States[0].Name,
                        opts.Countries[0].States[1].Name,
                        opts.Countries[0].States[2].Name,"Cancel"
                      ]);
            $.statedialog.show();
            $.statedialog.addEventListener('click',function(e)
            {
              if (e.index==3) {
                $.state.text="Select State"
              } else {
                  $.state.text=e.source.options[e.index];
              }

 });
  }
  else if ($.country.text=="AUS")
    {
      $.statedialog.setOptions([
                    opts.Countries[2].States[0].Name,
                    opts.Countries[2].States[1].Name,
                    opts.Countries[2].States[2].Name,"Cancel"
                  ]);
        $.statedialog.show();
        $.statedialog.addEventListener('click',function(e)
        {
          if (e.index==3) {
            $.state.text="Select State"
          } else {
              $.state.text=e.source.options[e.index];
          }
});
}

}
function dropdowncity() {

  if ($.state.text=="Select State") {
       alert("please fill state First");
     }
  if ($.state.text=="AUS-State1") {
            $.citydialog.setOptions([
                          opts.Countries[2].States[0].Cities[0],
                          opts.Countries[2].States[0].Cities[1],
                          opts.Countries[2].States[0].Cities[2],"Cancel"
                        ]);
              $.citydialog.show();
              $.citydialog.addEventListener('click',function(e)
              {
                if (e.index==3) {
                  $.city.text="Select City"
                } else {
                    $.city.text=e.source.options[e.index];
                }
   });
}
else if ($.state.text=="AUS-State2") {
  $.citydialog.setOptions([
                opts.Countries[2].States[1].Cities[0],
                opts.Countries[2].States[1].Cities[1],
                opts.Countries[2].States[1].Cities[2],"Cancel"
              ]);
    $.citydialog.show();
    $.citydialog.addEventListener('click',function(e)
    {
      if (e.index==3) {
        $.city.text="Select City"
      } else {
          $.city.text=e.source.options[e.index];
      }
});
}
else if ($.state.text=="AUS-State3") {
  $.citydialog.setOptions([
                opts.Countries[2].States[2].Cities[0],
                opts.Countries[2].States[2].Cities[1],
                opts.Countries[2].States[2].Cities[2],"Cancel"
              ]);
    $.citydialog.show();
    $.citydialog.addEventListener('click',function(e)
    {
      if (e.index==3) {
        $.city.text="Select City"
      } else {
          $.city.text=e.source.options[e.index];
      }
});
}
if ($.state.text=="IND-State1") {
          $.citydialog.setOptions([
                        opts.Countries[1].States[0].Cities[0],
                        opts.Countries[1].States[0].Cities[1],
                        opts.Countries[1].States[0].Cities[2],"Cancel"
                      ]);
            $.citydialog.show();
            $.citydialog.addEventListener('click',function(e)
            {
              if (e.index==3) {
                $.city.text="Select City"
              } else {
                  $.city.text=e.source.options[e.index];
              }
 });
}
else if ($.state.text=="IND-State2") {
$.citydialog.setOptions([
              opts.Countries[1].States[1].Cities[0],
              opts.Countries[1].States[1].Cities[1],
              opts.Countries[1].States[1].Cities[2],"Cancel"
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
    if (e.index==3) {
      $.city.text="Select City"
    } else {
        $.city.text=e.source.options[e.index];
    }
});
}
else if ($.state.text=="IND-State3") {
$.citydialog.setOptions([
              opts.Countries[1].States[2].Cities[0],
              opts.Countries[1].States[2].Cities[1],
              opts.Countries[1].States[2].Cities[2],"Cancel"
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
    if (e.index==3) {
      $.city.text="Select City"
    } else {
        $.city.text=e.source.options[e.index];
    }
});
}
if ($.state.text=="USA-State1") {
          $.citydialog.setOptions([
                        opts.Countries[0].States[0].Cities[0],
                        opts.Countries[0].States[0].Cities[1],
                        opts.Countries[0].States[0].Cities[2],"Cancel"
                      ]);
            $.citydialog.show();
            $.citydialog.addEventListener('click',function(e)
            {
              if (e.index==3) {
                $.city.text="Select City"
              } else {
                  $.city.text=e.source.options[e.index];
              }
 });
}
else if ($.state.text=="USA-State2") {
$.citydialog.setOptions([
              opts.Countries[0].States[1].Cities[0],
              opts.Countries[0].States[1].Cities[1],
              opts.Countries[0].States[1].Cities[2],"Cancel"
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
    if (e.index==3) {
      $.city.text="Select City"
    } else {
        $.city.text=e.source.options[e.index];
    }
});
}
else if ($.state.text=="USA-State3") {
$.citydialog.setOptions([
              opts.Countries[0].States[2].Cities[0],
              opts.Countries[0].States[2].Cities[1],
              opts.Countries[0].States[2].Cities[2],"Cancel"
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
    if (e.index==3) {
      $.city.text="Select City"
    } else {
        $.city.text=e.source.options[e.index];
    }
});
}

}

function goto_back() {
   $.win.close();
}
function cleartext(e){
  e.source.value=" ";
}
function clearlabel(e){
  e.source.text=" ";
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
