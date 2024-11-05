$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .btn').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
      $('.portfolio .image-container .box').show('400')
    }else{
      $('.portfolio .image-container .box').not('.'+filter).hide('200');
      $('.portfolio .image-container .box').filter('.'+filter).show('400');
    }

  });

  $('#theme-toggler').click(function(){
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

  // Seleksi gambar yang akan di-drag
const image = document.querySelector('.home .image img');

// Variable untuk menyimpan posisi gambar
let isDragging = false;
let startX, startY, currentX, currentY;

// Event saat mouse ditekan
image.addEventListener('mousedown', (e) => {
    isDragging = true;
    image.classList.add('dragging');
    startX = e.clientX;
    startY = e.clientY;
});

// Event saat mouse digerakkan
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        currentX = e.clientX - startX;
        currentY = e.clientY - startY;
        image.style.transform = `translate(${currentX}px, ${currentY}px) rotate(10deg)`; // Ubah posisi gambar
    }
});

// Event saat mouse dilepas
document.addEventListener('mouseup', () => {
    if (isDragging) {
        isDragging = false;
        image.classList.remove('dragging');
        image.style.transform = 'translate(0, 0) rotate(0deg)'; // Kembalikan ke posisi awal
    }
});


});


