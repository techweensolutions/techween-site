document.getElementById('year').textContent = new Date().getFullYear();

// Subtle parallax tilt on the hero mark — desktop only, respects reduced motion
var mark = document.querySelector('.mark');
var stage = document.querySelector('.mark-stage');
var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var isTouch = window.matchMedia('(pointer: coarse)').matches;

if(mark && stage && !prefersReduced && !isTouch){
  stage.addEventListener('mousemove', function(e){
    var rect = stage.getBoundingClientRect();
    var x = (e.clientX - rect.left) / rect.width - 0.5;
    var y = (e.clientY - rect.top) / rect.height - 0.5;
    mark.style.transform = 'rotateX(' + (y * -8) + 'deg) rotateY(' + (x * 10) + 'deg)';
  });
  stage.addEventListener('mouseleave', function(){
    mark.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
}
