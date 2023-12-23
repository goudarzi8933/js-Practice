function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function deleteCookie(cname) {
  setCookie(cname,'',-1);
}


let email = document.getElementById('email');
let password = document.getElementById('password');

let email_error = document.getElementById('email_error');
let pass_error = document.getElementById('pass_error');

function validated(){
	if (email.value.length < 9) {
		email.style.border = "1px solid red";
		email_error.style.display = "block";
		return false;
	}else {
        email.style.border = "1px solid silver";
		email_error.style.display = "none";
    }
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		return false;
	}else {
        password.style.border = "1px solid silver";
		pass_error.style.display = "none";
    }

}

if(getCookie('email')=='' || getCookie('password')==''){
    showForm();
    hideWmsg();
} else {
    showWmsg();
    hideForm();
}

function login(){
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    setCookie('email', email);
    setCookie('password', password);
    hideForm();
    showWmsg();
}

function home(){
    deleteCookie('email');
    deleteCookie('password');
    showForm();
    hideWmsg();
}

function showWmsg(){
    updateWmsg();
    document.getElementById('wmsg').style.display = 'block';
}
function hideWmsg(){
    document.getElementById('wmsg').style.display = 'none';
}
function showForm(){
    document.getElementById('form').style.display = 'block';
}
function hideForm(){
    document.getElementById('form').style.display = 'none';
}

function updateWmsg(){
    document.getElementById('enter').innerText = getCookie('email') + ' ' + getCookie('password');
}





