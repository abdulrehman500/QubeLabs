// register event handler





document.addEventListener("DOMContentLoaded", function(){
  const $toggle = $('.arrow');

 $toggle.on('click', function() {
   alert("dd");
   if ($(this).hasClass('active1')) {
     $(this).removeClass('active1');
   } else {
     $(this).addClass('active1');
   }
 });

 
  window.addEventListener('scroll', function() {
      if (window.scrollY > 450) {
        document.getElementById('navbar').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
});



