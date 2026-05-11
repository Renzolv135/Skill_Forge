/* Dashboard*/
function trocarTab(event, tab) {

  document.querySelectorAll(".tab").forEach(t => {
    t.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  document.querySelectorAll(".tab-content").forEach(c => {
    c.classList.add("hidden");
    c.classList.remove("fade-in");
  });

  const ativa = document.getElementById(tab);
  ativa.classList.remove("hidden");

  setTimeout(() => {
    ativa.classList.add("fade-in");
  }, 50);
}

/* cursos */
function abrirModal(titulo, desc, rating, horas, imagem) {

  document.getElementById("modal-title").innerText = titulo;
  document.getElementById("modal-desc").innerText = desc;
  document.getElementById("modal-rating").innerText = rating;
  document.getElementById("modal-hours").innerText = horas;
  document.getElementById("modal-img").src = imagem;

  document.getElementById("modal").classList.add("active"); // 🔥 corrigido
}

function fecharModal() {
  document.getElementById("modal").classList.remove("active"); // 🔥 corrigido
}

/* fechar*/
window.onclick = function(event) {
  const modal = document.getElementById("modal");

  if (event.target === modal) {
    fecharModal();
  }
}

/* login por tipo */

let tipoConta = "aluno";

function selectType(tipo, element) {
  tipoConta = tipo;

  document.querySelectorAll(".type-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  element.classList.add("active");
}

/* LOGIN */
function login() {

  if (tipoConta === "admin") {
    window.location.href = "admin-dashboard.html";
  } else {
    window.location.href = "dashboard.html";
  }

}

/* Aprova */
function aprovarCert(btn) {
  const card = btn.closest(".cert-card");
  const badge = card.querySelector(".badge");

  badge.innerText = "✔ Aprovado";
  badge.className = "badge validado";
}

/* Recusa */
function recusarCert(btn) {
  const card = btn.closest(".cert-card");
  const badge = card.querySelector(".badge");

  badge.innerText = "❌ Recusado";
  badge.className = "badge pendente";
}