$(document).ready(function(){
  var  mn = $(".main-nav");
      mns = "main-nav-scrolled";
      act = "active";
      hdr = $('header').height();
      work = $("#work");
      resume = $('#resume');
      projects = $("#projects");
      about = $("#about");
      contact = $("#contact");
      formerrors = $('.form-errors');
      button = $('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

      $(window).load(function() {
        $("body").removeClass("preload");
      });

  $(window).scroll(function() {
    if( $(this).scrollTop() > hdr ) {
      mn.addClass(mns);
    } else {
      mn.removeClass(mns);
    }
  });

  projects.on('click',function(){
    projects.addClass(act);
    about.removeClass(act);
    contact.removeClass(act);
    resume.removeClass(act);
  })

  about.on('click',function(){
    about.addClass(act);
    projects.removeClass(act);
    contact.removeClass(act);
    resume.removeClass(act);
  });

  contact.on('click',function(){
    contact.addClass(act);
    projects.removeClass(act);
    about.removeClass(act);
    resume.removeClass(act);
  })

  work.on('click', function(){
    projects.addClass(act);
    about.removeClass(act);
    resume.removeClass(act);
  });

  $("#contact-form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      firstName: 'required',
      sub: 'required',
      msg: 'required'
    },
    highlight: function(element, errorClass, validClass) {
      $(element).parents('.col-md-6').addClass('has-error').removeClass('has-success');
      $(element).parents('.col-md-12').addClass('has-error').removeClass('has-success');
      $('.form-errors').addClass('alert alert-danger alert-dismissible');
      formerrors.append(button);
      $('.form-errors').html("Validation errors have occured")
    },
    unhighlight: function(element, errorClass, validClass){
      formerrors.hide();
      $(element).parents('.col-md-6').addClass('has-success').removeClass('has-error');
      $(element).parents('.col-md-12').addClass('has-success').removeClass('has-error');
    }
  });
})
