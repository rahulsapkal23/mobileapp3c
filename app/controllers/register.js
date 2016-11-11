
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
  conform_password






  */

function dropdown(e) {

  Ti.UI.backgroundColor = 'white';
  var win = Ti.UI.createWindow({
    exitOnClose: true,
    layout: 'vertical',
    height:"500"

  });

  var picker = Ti.UI.createPicker({
    type:Ti.UI.PICKER_TYPE_DATE,
    minDate:new Date(2009,0,1),
    maxDate:new Date(2014,11,31),
    value:new Date(2014,3,12),

    top:50
  });
  var cancelButton = Ti.UI.createButton({
    systemButton: Ti.UI.iOS.SystemButton.CANCEL });
  win.add(cancelButton);
  win.add(picker);

  win.open();

  picker.addEventListener('change',function(e){
    Ti.API.info("User selected date: " + e.value.toLocaleString());
    var cancelButton = Ti.UI.createButton({
      systemButton: Ti.UI.iOS.SystemButton.CANCEL });
      win.add(cancelButton);
    //  win.close();
  });

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
