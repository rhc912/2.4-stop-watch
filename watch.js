

(function(){
  'use strict';
var hours = document.querySelector('.hours');
var minutes = document.querySelector('.minutes');
var seconds = document.querySelector('.seconds');

function formatTime(time){
  var paddedTime = [];
  paddedTime[0] = ("0" + time[0]).slice(-2);
  paddedTime[1] = ("0" + time[1]).slice(-2);
  paddedTime[2] = ("0" + time[2]).slice(-2);
  return paddedTime;
}
function updateDisplay(time){
  var formattedTime = formatTime(time);
  hours.textContent = time [0];
  minutes.textContent = time[1];
  seconds.textContent = time[2];
}
function updateProgressBar(seconds){
  var progressBar = document.getElementById('progress-bar')
  var width = (seconds / 60) * 100;

  progressBar.style.width = width + '%';
}
function updateBackgroundColor(time){
  var red = (time[0] * 21).toString(16);
  var green = (time[1] * 21).toString(16);
  var blue = (time[2] * 21).toString(16);

  var backgroundColor = formatTime([red, green, blue])
  var container = document.querySelector('.container');
  container.style.backgroundColor = '#' + backgroundColor.join('');

  return backgroundColor;
}

function runClock(){
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var clockTime = [hours, minutes, seconds];

  var newBackgroundColor = updateBackgroundColor(clockTime)

  updateDisplay(clockTime)

  updateProgressBar(seconds);
}
function trackMouse(event){
  if(event.type == 'mouseenter'){
    mouseHovering = true;
  }else{
    mouseHovering = false;
  }
}

window.setInterval(runClock, 1000);

container.addEventListener('mouseenter', trackMouse);
container.addEventListener('mouseleave', trackMouse);



}());
