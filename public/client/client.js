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
