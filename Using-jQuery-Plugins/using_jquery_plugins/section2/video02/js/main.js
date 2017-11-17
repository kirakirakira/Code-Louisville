$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('.header').sticky();

$('.header').on('sticky-start', function () {
  $('.description').html('We build <strong>great</strong> apps');
});

$('.header').on('sticky-end', function () {
  $('.description').html('We build apps');
});

$('#want-us').sticky({
  topSpacing: 60
});

$('#want-us').on('sticky-start').append('<span id="email-us"> Email us!</span>');
//
// $('#email-us').on('sticky-end').remove();
