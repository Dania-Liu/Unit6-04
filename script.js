// Sets defaut values
let b2 = 0
let b1 = 0
let h = 0
let sum = 0
let product = 0
let answer = 0

// Proceeds to the function once button is pressed
document.getElementById('button').addEventListener('click', solve)

// Calculates using the inputs
function solve () {
  b2 = document.getElementById('secondbase').value
  b2 = parseInt(b2)
  b1 = document.getElementById('firstbase').value
  b1 = parseInt(b1)
  h = document.getElementById('height').value
  h = parseInt(h)
  sum = b2 + b1
  product = sum / 2
  answer = product * h
  document.getElementById('paragraph').innerHTML = answer
}
