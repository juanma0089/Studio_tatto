"use";

const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

//? jquery

$(window).resize(function () {
  if ($(window).width() <= 820) {
    $("div.video1").hide();
  } else {
    $("div.video1").show();
  }
});
$(document).ready(function () {
  if ($(window).width() <= 820) {
    $("div.video1").hide();
  } else {
    $("div.video1").show();
  }
});

$(window).resize(function () {
  if ($(window).width() <= 820) {
    $("span").hide();
  } else {
    $("span").show();
  }
});

$(window).ready(function () {
  $(window).on(function () {
    $("h1.fadeInLoad").fadeIn(1000);
  });
});

// ?javascript
function show_grey(obj) {
  $(obj).removeClass("grey-scale");
}
function show_original(obj) {
  $(obj).addClass("grey-scale");
}


function moverTexto(){

  let idTexto = document.getElementById('presentacion');

  if(idTexto.classList.contains('noMostrar')){

    idTexto.classList.remove('noMostrar');
    idTexto.classList.add('mostrar');

  }
 
}


function isVisible(elm) {
  let rect = elm.getBoundingClientRect();
  let viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight)/1.3;
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

// cuando se carga la página
window.addEventListener('DOMContentLoaded', (ev0) => {
// asignamos un evento scroll
  window.addEventListener('scroll', (ev1) => {
// y a todos los elementos con la clase paused
    document.querySelectorAll(".paused").forEach(elm => {
      if (isVisible(elm)){ // que sean visibles
        elm.classList.remove("paused"); // les quitamos la clase paused
      }
    })
  });
})
// $(document).ready(function(){
//     $("img").mouseover(function(){
//       $("img").removeClass("grey-scale");
//     });
//     $("img").mouseout(function(){
//       $("img").addClass("grey-scale");
//     });
//   });
