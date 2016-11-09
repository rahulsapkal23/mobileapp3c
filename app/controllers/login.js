
function check_login(e) {
  var payload={
    user_name:$.user_name.value,
    password:$.password.value



  }
  var w=Alloy.createController('detailwin',payload).getView();
  w.open();

}
function goto_back() {
   $.win.close();
}
function cleartext(e){
  e.source.value=" ";
}
