(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var socket = io()

var subject = document.getElementById("subject")
var submit = document.getElementById("submit")
var getSubject = submit.addEventListener("click", function() {
  if (subject.value !==null) {
    return subject.value
  }
  else {
    return false
  }
}, false)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvY2xpZW50L2NsaWVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNvY2tldCA9IGlvKClcblxudmFyIHN1YmplY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1YmplY3RcIilcbnZhciBzdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKVxudmFyIGdldFN1YmplY3QgPSBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICBpZiAoc3ViamVjdC52YWx1ZSAhPT1udWxsKSB7XG4gICAgcmV0dXJuIHN1YmplY3QudmFsdWVcbiAgfVxuICBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSwgZmFsc2UpXG5cblxubGV0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3c+ZGl2Jylcblxuc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24oKSB7XG4gIGNvbnNvbGUubG9nKFwic29ja2V0IG9uXCIpXG59KVxuXG5zb2NrZXQub24oJ2NvbG9yJywgZnVuY3Rpb24oZGF0YSkge1xuICBjb25zb2xlLmxvZygnZGF0YScsIGRhdGEpXG5cbiAgdmFyIHsgcmdiIH0gPSBkYXRhXG5cbiAgZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoJyArIFtyZ2JbMF0sIHJnYlsxXSwgcmdiWzJdXS5qb2luKCcsJykgKyAnKSdcbiAgaWYgKGRpdi5uZXh0RWxlbWVudFNpYmxpbmcpXG4gICAgZGl2ID0gZGl2Lm5leHRFbGVtZW50U2libGluZ1xuICBlbHNlXG4gICAgZGl2ID0gZGl2LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF1cbn0pXG4iXX0=
