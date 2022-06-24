// function changeImg() {
//   var randomNumber1 = Math.floor(Math.random() * 6) + 1
//   var randomNumber2 = Math.floor(Math.random() * 6) + 1

//   var player1 = document.querySelectorAll('.column img')[0]
//   var player2 = document.querySelectorAll('.column img')[1]

//   var header = document.querySelector('h1')

//   if (randomNumber1 > randomNumber2) {
//     header.textContent = 'Player 1 is the winner '
//   } else if (randomNumber2 > randomNumber1) {
//     header.textContent = 'Player 2 is the winner'
//   } else if (randomNumber2 === randomNumber1) {
//     header.textContent = 'Draw'
//   }

//   for (var i = 1; i <= 6; i++) {
//     if (randomNumber1 === i) {
//       player1.setAttribute('src', `./images/dice${i}.png`)
//     }
//     if (randomNumber2 === i) {
//       player2.setAttribute('src', `./images/dice${i}.png`)
//     }
//   }
// }

// changeImg()

var randomNumber1 = Math.floor(Math.random() * 6) + 1

var randomDiceImage = 'dice' + randomNumber1 + '.png'

var randomImageSource = 'images/' + randomDiceImage

var player1 = document.querySelector('.img1')
player1.setAttribute('src', randomImageSource)

var randomNumber2 = Math.floor(Math.random() * 6) + 1
var randomDiceImage2 = 'dice' + randomNumber2 + '.png'
var randomImageSource2 = 'images/' + randomDiceImage2

var player2 = document.querySelector('.img2')
player2.setAttribute('src', randomImageSource2)

var header = document.querySelector('h1')

if (randomNumber1 > randomNumber2) {
  header.textContent = 'Player 1 is the winner '
} else if (randomNumber2 > randomNumber1) {
  header.textContent = 'Player 2 is the winner'
} else if (randomNumber2 === randomNumber1) {
  header.textContent = 'Draw'
}
