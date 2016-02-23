function iso_init(){
  return $('.iso-items').isotope({
    itemSelector: '.iso-item',
    layoutMode: 'fitRows'
  });
};

$(document).ready(function(){

  /////// Nav smooth scrolling ////////
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });


  //////// Isotope /////////
  var $container = iso_init();

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('.filter-button-group button').removeClass("active");
    $(this).addClass("active");
  });


  /////// Porfolio item hover effect ///////
  $('.iso-items > li').each( function() { $(this).hoverdir(); } );


  /////// Portfolio links //////////
  $('.portfolio-bubble').on("click", function(){
    $('.modal').modal('hide');
  });

  $('.iso-item a').on("click", function(){
    if($(this).data("toggle") == "modal"){
      $(".portfolio-bubble.app").attr("href", $(this).data("app"));
      $(".portfolio-bubble.git").attr("href", $(this).data("git"));
    };
  });

});

$(window).load(function(){
  // Need to wait for iso items to load
  iso_init();
});