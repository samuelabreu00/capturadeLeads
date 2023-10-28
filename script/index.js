// BUTTON WAPP DESAPARECER
const toTop = document.querySelector(".button-wpp");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("ativado");
  } else {
    toTop.classList.remove("ativado");
  }
})

// BACK TO TOP
const Top = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    Top.classList.add("ative");
  } else {
    Top.classList.remove("ative");
  }
})

// SCROLL REVEL
window.sr = ScrollReveal({reset: true});

sr.reveal('.modulo',  {duration: 1000});
sr.reveal('.modulo2', {duration: 1050});
sr.reveal('.modulo3', {duration: 1100});
sr.reveal('.modulo4', {duration: 1150});
sr.reveal('.modulo5', {duration: 1200});
sr.reveal('.modulo6', {duration: 1250});

sr.reveal('.title-direc', {duration: 1000});
sr.reveal('.oportunidade', {duration: 1100});

sr.reveal('.resposta', {duration: 1000});
sr.reveal('.resposta2', {duration: 1050});
sr.reveal('.resposta3', {duration: 1100});
sr.reveal('.resposta4', {duration: 1150});
sr.reveal('.resposta5', {duration: 1200});
sr.reveal('.resposta6', {duration: 1250});

sr.reveal('.content-contato', {duration: 1300});

sr.reveal('.title-apresentacao', {duration: 1800});
sr.reveal('.content', {duration: 2000});

sr.reveal('.title-aprendizado', {duration: 2000});
