$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $("#nav").addClass("scroll");
    } else {
      $("#nav").removeClass("scroll");
    }
  });
});

/*$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $("#nav").addClass("scroll");
    } else {
      $("#nav").removeClass("scroll");
    }
  });
});*/