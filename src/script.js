var menu_btn = document.querySelector(".barras-menu"),
  menu = document.querySelector(".items-mobile");
menu_btn.addEventListener("click", () => {
  if (menu.classList.contains("hide")) {
    menu.classList.remove("hide");
    menu.style.display = "block";
    setTimeout(() => {
      menu.classList.add("show");
    }, 100);
  } else {
    menu.classList.remove("show");
    menu.classList.add("hide");
    setTimeout(() => {
      menu.style.display = "none";
    }, 1000);
  }
});

// Carrossel

var lastIndex = 0,
    index = 0,
    inativo = true;

const comentarios = Array.from(document.querySelectorAll('.container-slider .container-slider-single')),
      bullet = document.querySelectorAll('.btns a');

bullet.forEach((b) => {
  b.addEventListener('click', () => {
    inativo = false
    // document.querySelector('.depoimentos').style.backgroundColor = 'red'
    renderizar(b.id)
    setTimeout(() => { inativo = true }, 15000)
  })
})

function renderizar(id) {
  if (id == 'prev') {
    index--
    if (index < 0) { index = comentarios.length - 1 }
  }
  else if (id == 'prox') {
    index++
    if (index >= comentarios.length) { index = 0 }

  }
  document.querySelectorAll('.container-slider .container-slider-single')[lastIndex].style.opacity = 0;
  document.querySelectorAll('.container-slider .container-slider-single')[index].style.opacity = 1;

  lastIndex = index;
}

setInterval(() => {
  if (inativo == true) {
    renderizar('prox');
    document.querySelector('.depoimentos').style.backgroundColor = 'white'
  } else {}
}, 5000)
