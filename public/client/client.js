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
