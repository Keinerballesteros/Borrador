const ussername = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('btn')
function validate(){
    const nombre = document.getElementById('username')
    if(nombre.lenght>2){
        document.getElementById("password").disabled = false;
        document.getElementById("password").focus();
        document.getElementById("username").value = "";
        function login(){
            window.location.href = "index.html";
          }
    }
    else{
       // alert("El nombre es incorrecto");
    }
}
