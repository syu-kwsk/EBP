let doors = $('.door');
doors.click(function() {
  doors.toggleClass('open');
  if(doors.hasClass('open')) {
    doors.css('transform', 'translate(-56.5%, -50%) rotateY(85deg) skewY(-10deg)');
  } else {
    doors.css('transform', 'translate(-50%, -50%) rotateY(0deg)');
  }
});