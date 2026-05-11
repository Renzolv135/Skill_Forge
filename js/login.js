/*aluno ou admin */

let tipoSelecionado = "aluno";

function selectType(tipo, el) {

  tipoSelecionado = tipo;

  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  el.classList.add("active");

  const container = document.querySelector(".account-type");

  if (tipo === "admin") {
    container.classList.add("admin");
  } else {
    container.classList.remove("admin");
  }
}

/* login*/

function login() {

  
  console.log("Tipo:", tipoSelecionado);

  if (tipoSelecionado === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "dashboard.html"; 
  }
}