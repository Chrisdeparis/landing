console.log('my script works!');

$(document).ready(function(){
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e){
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 )
  })

})

$("a[href='#toph']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
  });