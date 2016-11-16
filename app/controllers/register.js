
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

    alert("please fill first name");
  }
  else if ($.last_name.value=="") {
    alert("please fill last name");
  }
  else if (emailRE.test($.email_id.value)==false) {
    alert("Invalid email_id");
  }
  else if (passwordRE.test($.password.value)==false) {
    alert("Password must be 1 lower 1 upper and 1 digit");
  }
  else if (mobRE.test($.phone_no.value)==false) {
    alert("Phone No must be 10 digits");

  }
  else if ($.picker.value=="2016-11-09 18:30:00 +0000") {
    Ti.API.info("dob");
    alert("please fill valid Date of Birth");
  }

  else if ($.country.value=="") {
     alert("please fill country");

  }
  else if ($.state.value=="") {
    alert("please fill state");
  }
  else if ($.city.value=="") {
    Ti.API.info("city");
    alert("please fill city");
  }
  else if (zipRE.test($.zipcode.value)==false) {
    alert("zipcode must be 6 digits");

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

     function dropdowncountry(e)
     {

            $.countrydialog.setOptions([opts.Countries[0].Name,opts.Countries[1].Name,opts.Countries[2].Name]);
            $.countrydialog.show();
            $.countrydialog.addEventListener('click',function(e){
                    if (e.index==0) {
                        $.country.value="USA";
                    }
                    else if (e.index==1) {
                        $.country.value="INDIA";
                    }
                    else {
                      $.country.value="AUS";
                    }

              });
       }


    function dropdownstate(e)
    {
      if ($.country.value=="") {
           alert("please fill country First");
         }
        else    if ($.country.value=="INDIA") {
                      $.statedialog.setOptions([
                                    opts.Countries[1].States[0].Name,
                                    opts.Countries[1].States[1].Name,
                                    opts.Countries[1].States[2].Name
                                  ]);
                        $.statedialog.show();
                        $.statedialog.addEventListener('click',function(e)
                        {
                                $.state.value=e.source.options[e.index];
             });
      }
      else if ($.country.value=="USA")
        {
          $.statedialog.setOptions([opts.Countries[0].States[0].Name,
                        opts.Countries[0].States[1].Name,
                        opts.Countries[0].States[2].Name
                      ]);
            $.statedialog.show();
            $.statedialog.addEventListener('click',function(e)
            {
                    $.state.value=e.source.options[e.index];
 });
  }
  else if ($.country.value=="AUS")
    {
      $.statedialog.setOptions([
                    opts.Countries[2].States[0].Name,
                    opts.Countries[2].States[1].Name,
                    opts.Countries[2].States[2].Name
                  ]);
        $.statedialog.show();
        $.statedialog.addEventListener('click',function(e)
        {
                $.state.value=e.source.options[e.index];
});
}

}
function dropdowncity() {
  if ($.state.value=="") {
       alert("please fill state First");
     }
  if ($.state.value=="AUS-State1") {
            $.citydialog.setOptions([
                          opts.Countries[2].States[0].Cities[0],
                          opts.Countries[2].States[0].Cities[1],
                          opts.Countries[2].States[0].Cities[2]
                        ]);
              $.citydialog.show();
              $.citydialog.addEventListener('click',function(e)
              {
                      $.city.value=e.source.options[e.index];
   });
}
else if ($.state.value=="AUS-State2") {
  $.citydialog.setOptions([
                opts.Countries[2].States[1].Cities[0],
                opts.Countries[2].States[1].Cities[1],
                opts.Countries[2].States[1].Cities[2]
              ]);
    $.citydialog.show();
    $.citydialog.addEventListener('click',function(e)
    {
            $.city.value=e.source.options[e.index];
});
}
else if ($.state.value=="AUS-State3") {
  $.citydialog.setOptions([
                opts.Countries[2].States[2].Cities[0],
                opts.Countries[2].States[2].Cities[1],
                opts.Countries[2].States[2].Cities[2]
              ]);
    $.citydialog.show();
    $.citydialog.addEventListener('click',function(e)
    {
            $.city.value=e.source.options[e.index];
});
}
if ($.state.value=="IND-State1") {
          $.citydialog.setOptions([
                        opts.Countries[1].States[0].Cities[0],
                        opts.Countries[1].States[0].Cities[1],
                        opts.Countries[1].States[0].Cities[2]
                      ]);
            $.citydialog.show();
            $.citydialog.addEventListener('click',function(e)
            {
                    $.city.value=e.source.options[e.index];
 });
}
else if ($.state.value=="IND-State2") {
$.citydialog.setOptions([
              opts.Countries[1].States[1].Cities[0],
              opts.Countries[1].States[1].Cities[1],
              opts.Countries[1].States[1].Cities[2]
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
          $.city.value=e.source.options[e.index];
});
}
else if ($.state.value=="IND-State3") {
$.citydialog.setOptions([
              opts.Countries[1].States[2].Cities[0],
              opts.Countries[1].States[2].Cities[1],
              opts.Countries[1].States[2].Cities[2]
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
          $.city.value=e.source.options[e.index];
});
}
if ($.state.value=="USA-State1") {
          $.citydialog.setOptions([
                        opts.Countries[0].States[0].Cities[0],
                        opts.Countries[0].States[0].Cities[1],
                        opts.Countries[0].States[0].Cities[2]
                      ]);
            $.citydialog.show();
            $.citydialog.addEventListener('click',function(e)
            {
                    $.city.value=e.source.options[e.index];
 });
}
else if ($.state.value=="USA-State2") {
$.citydialog.setOptions([
              opts.Countries[0].States[1].Cities[0],
              opts.Countries[0].States[1].Cities[1],
              opts.Countries[0].States[1].Cities[2]
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
          $.city.value=e.source.options[e.index];
});
}
else if ($.state.value=="USA-State3") {
$.citydialog.setOptions([
              opts.Countries[0].States[2].Cities[0],
              opts.Countries[0].States[2].Cities[1],
              opts.Countries[0].States[2].Cities[2]
            ]);
  $.citydialog.show();
  $.citydialog.addEventListener('click',function(e)
  {
          $.city.value=e.source.options[e.index];
});
}

}

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
