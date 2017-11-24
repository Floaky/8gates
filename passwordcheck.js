



function nome(){
	

	var login = '123';
	var pass = document.getElementById("pass").value;
	if(login == pass){

		document.write("Pass Certa!"); 
	}else{
		document.write("Passa-te ao caralho");


	}
} 

    function keydownHandler(e) {
var evt = e ? e:event;
  var keyCode = evt.keyCode;

  if (keyCode==38 || keyCode==39 || keyCode==40 || keyCode==37){ //arrow keys
e.preventDefault()
scrollTo(0,0);
}
}

document.onkeydown=keydownHandler;