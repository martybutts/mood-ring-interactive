(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var socket = io()
let div = document.querySelector('.row>div')

socket.on('connect', function() {
  console.log("socket on")
})

socket.on('color', function(data) {
  console.log('data', data)

  var { rgb } = data

  div.style.backgroundColor = 'rgb(' + [rgb[0], rgb[1], rgb[2]].join(',') + ')'
  if (div.nextElementSibling)
    div = div.nextElementSibling
  else
    div = div.parentElement.children[0]
})

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY2xpZW50L2NsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBzb2NrZXQgPSBpbygpXG5sZXQgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdz5kaXYnKVxuXG5zb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbigpIHtcbiAgY29uc29sZS5sb2coXCJzb2NrZXQgb25cIilcbn0pXG5cbnNvY2tldC5vbignY29sb3InLCBmdW5jdGlvbihkYXRhKSB7XG4gIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcblxuICB2YXIgeyByZ2IgfSA9IGRhdGFcblxuICBkaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYignICsgW3JnYlswXSwgcmdiWzFdLCByZ2JbMl1dLmpvaW4oJywnKSArICcpJ1xuICBpZiAoZGl2Lm5leHRFbGVtZW50U2libGluZylcbiAgICBkaXYgPSBkaXYubmV4dEVsZW1lbnRTaWJsaW5nXG4gIGVsc2VcbiAgICBkaXYgPSBkaXYucGFyZW50RWxlbWVudC5jaGlsZHJlblswXVxufSlcbiJdfQ==
