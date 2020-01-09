(function() {
  
  console.log('ring a ding ding');
  $(document).ready(function() {

      if (sessionStorage.getItem('advertOnce') == 'true') {
          $('#boxes').css('display', 'initial');
          sessionStorage.setItem('advertOnce','true');
      }  

      var id = '#dialog';

      resize = function(){
        //Get the screen height and width
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //Set heigth and width to mask to fill up the whole screen
        $('#mask').css({
            'width': maskWidth,
            'height': maskHeight
        });
      }
      
      resize();
      
      window.onresize = resize;

      //transition effect
      $('#mask').fadeIn(500);
      $('#mask').fadeTo("slow", 0.9);

      //Get the window height and width
      var winH = $(window).height();
      var winW = $(window).width();

      //transition effect
      $(id).fadeIn(2000);

      //if close button is clicked
      $('.window .close').click(function(e) {
          //Cancel the link behavior
          e.preventDefault();

          $('#mask').hide();
          $('.window').hide();
      });

      //if mask is clicked
      $('#mask').click(function() {
          $(this).hide();
          $('.window').hide();
      });

      $('input.checkboxz').change(function() {
        if ($(this).is(':checked')) {
          console.log('hello im on the console');
          $('input#mc-embedded-subscribe').css({"pointer-events": "initial", "background-color": "#932239"});
        } else {
          console.log('Unchecked');
          $('input#mc-embedded-subscribe').css({"pointer-events": "none", "background-color": "#B5B5B5"});
        }
      });  

  }); 
          
})();