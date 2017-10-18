// $(function(){
//   $('.page-scroll a').on('click', function(event){
//     //figure which panel to show
//     var panelToShow = $(this).attr('href');
//     //alert(panelToShow);
//     //show new opanel
//     // $('#' + panelToShow).addClass('.proactive')
//      $('#knowsection').addClass('.proactive')
//     $('html, body').animate({
//       scrollTop: $(panelToShow).offset().top
//     }, 500);

//     // $('#' + panelToShow).show(300);
//     event.preventDefault();
//   });
// });

$(function() {
  $('.page-scroll a').on('click', function() {
     //console.log($(this).attr('href').offset().top);

      $('#knowsection1').addClass('proactive');
      $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top
      }, 1000);
      return false;
  })

  $('.resumetag a').on('click', function() {
    //console.log($(this).attr('href').offset().top);
    $('#section3').removeClass('proactive');
     $('#section2').addClass('proactive');
     $('html, body').stop().animate({
       scrollTop: $( $(this).attr('href') ).offset().top
     }, 1000);
     return false;
 })
 $('.skillstag a').on('click', function() {
  //console.log($(this).attr('href').offset().top);
  $('#section2').removeClass('proactive');
   $('#section3').addClass('proactive');
   $('html, body').stop().animate({
     scrollTop: $( $(this).attr('href') ).offset().top
   }, 1000000);
   return false;
})

});

