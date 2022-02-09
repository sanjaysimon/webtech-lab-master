const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');


signUpButton.addEventListener('click', () =>
container.classList.add('right-panel-active') );

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active') );

function CheckPassword(form){
	var passw = /^[A-Za-z]\w{1,7}$/;
	var n1 = form.name.value;
	var p1 = form.password1.value; 
    var p2 = form.password2.value;
    if (n1 == ''){
    	alert("Please provide your email or contact no.");
    	return false;
    }
    if (p1 == ''){
    	alert ("Please enter Password"); 
    	return false;
    }
    else if (p2 == ''){
    	alert ("Please enter confirm password");  
    	return false;
    } 
        
	if(p1.match(passw)) 
	{ 
		if (p1 != p2) { 
            alert ("\nPlease check password and confirm password"); 
            return false; 
        }
        else{
        	alert ("\nSign-up sucessfull!");
        	location.replace("index.html");
        	return true; 
        }
	}
	else
	{ 
		alert("Given password does not fulfill the criteria")
		return false;
	}
}

function Entry(form){
	var name = form.uname.value;
	var pass = form.password.value; 
	if (name == ''){
    	alert ("Please enter Password"); 
    	return false;
    }
    else if (pass == ''){
    	alert ("Please enter password");  
    	return false;
    } 
    else{
    	alert ("\nSign-in sucessfull!");
        location.replace("index.html");
        return true; 
    }
}