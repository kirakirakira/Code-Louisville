$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky({
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('.want-us').sticky({
  topSpacing: 60,
  getWidthFrom: '.container',
  responsiveWidth: true
});

$('.want-us').on('sticky-start', function() {
  $(this).append('<a href="#" class="email-us"> Email us!</a>');
});

$('.want-us').on('sticky-end', function() {
  $('.email-us').remove();
});
