const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + "px";
  // DIV 1 background will move slower than other elements on scroll.
});

//? jquery

$(window).resize(function() {
 
    if($(window).width() <= 820){
        $("div.video1").hide()
    }
    else{
        $("div.video1").show()
    }
 
});

$(window).resize(function() {
 
    if($(window).width() <= 820){
        $("span").hide()
    }
    else{
        $("span").show()
    }
 
});

$(window).ready(function(){

    $(window).on(function(){
        $("h1.fadeInLoad").fadeIn(1000);
    });
  });

