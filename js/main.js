$(document).ready(function(){
  var  mn = $(".main-nav");
      mns = "main-nav-scrolled";
      act = "active";
      hdr = $('header').height();
      work = $("#work");
      portfolio = $("#portfolio");
      about = $("#about");
      contact = $("#contact");

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

  portfolio.on('click',function(){
    portfolio.addClass(act);
    about.removeClass(act);
    contact.removeClass(act);
  })

  about.on('click',function(){
    about.addClass(act);
    portfolio.removeClass(act);
    contact.removeClass(act);
  });

  contact.on('click',function(){
    contact.addClass(act);
    portfolio.removeClass(act);
    about.removeClass(act);
  })

  work.on('click', function(){
    portfolio.addClass(act);
    about.removeClass(act);
  });
})
