/* =========================
   SELEÇÃO DE TIPO (ALUNO / ADMIN)
========================= */

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

/* =========================
   LOGIN (REDIRECIONAMENTO)
========================= */

function login() {

  // 🔹 aqui depois você pode validar email/senha
  console.log("Tipo:", tipoSelecionado);

  if (tipoSelecionado === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "dashboard.html"; // sua tela do aluno
  }
}