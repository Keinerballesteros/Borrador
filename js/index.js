let myName = document.getElementById("names");
let title = document.getElementById("name");
myName.onclick = function () {
    estableceNombreUsuario();
  };
function estableceNombreUsuario() {
    let miName = prompt("Por favor, ingresa tu nombre:");
    localStorage.setItem("nombre", miName);
    title.textContent = "¡Hola," + miName +"!";
  }
  if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
  } else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    title.textContent = "¡Hola," + nombreAlmacenado +"!";
  }
  function login(){
    window.location.href = "/subpaginas/register.html";
  }
  
  