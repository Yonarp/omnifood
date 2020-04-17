$(document).ready(function () {
    /*-------for the sticky nav-----*/
    $('.js--section-features').waypoint(function(direction) {
        if (direction== "down")
            {
                $('nav').addClass('sticky');
                
            }
        else{
            $('nav').removeClass('sticky');
            
        }
    },
        {
            offset: '70px;'
        
    });

    
    /*--scroll on buttons---*/
    $('.js--scroll-to-plan').click(function()
                                  {
        $('html , body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500)
        
    });
    
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},700)
    });
    
    
    
    /*-----anims on scroll-*/
    $('.js--wp1').waypoint(function(direction){
        $('.js--wp1').addClass('animated fadeIn');
    },{
offset:'40%'});
      $('.js--wp2').waypoint(function(direction){
        $('.js--wp2').addClass('animated fadeInUp');
    },{
offset:'40%'});
      $('.js--wp3').waypoint(function(direction){
        $('.js--wp3').addClass('animated fadeIn');
    },{
offset:'40%'});
      $('.js--wp4').waypoint(function(direction){
          if(direction=="down")
              {
        $('.js--wp4').addClass('animated pulse');
              }
          else
              {
                   $('.js--wp4').removeClass('animated pulse');
              }
    },{
offset:'40%'});
    
    
    /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})
*/
    
 

});
