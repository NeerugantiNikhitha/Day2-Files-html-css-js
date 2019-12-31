function validateForm(){
    var user=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    if(user==""){
        document.getElementById("user-Error").innerHTML="Username is required"
    }else{
        document.getElementById("user-Error").innerHTML=""
    }
    if(pass == ""){
        document.getElementById("pass-error").innerHTML="password is required"
    }else{
        document.getElementById("pass-error").innerHTML=""
    }
    if( user !="" && pass!=""){
        document.getElementById("frm").onsubmit();
        }
}