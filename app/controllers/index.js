

function openLogin(e) {

    var w=Alloy.createController('login').getView();
    w.open();
}
function openRegister(e) {
  
    var w=Alloy.createController('register').getView();
    w.open();
}
$.index.open();
