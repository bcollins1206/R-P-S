document.querySelector('#rock').addEventListener('click',(event)=>{
  event.preventDefault()
  gamePlay("rock")
})
document.querySelector('#paper').addEventListener('click',(event)=>{
  event.preventDefault()
  gamePlay("paper")

})
document.querySelector('#scissors').addEventListener('click',(event)=>{
  event.preventDefault()
  gamePlay("scissors")
})
document.querySelector('#clear').addEventListener('click',(event)=>{
  event.preventDefault()
  clear()
})
let wins = 0
let losses = 0
let ties = 0
const gamePlay = (user)=>{
  let scissors = '<img src="../photos/PH03379I.JPG" class="img-fluid">'+ "<h5 class='text-center bg-warning p-3'>Scissors</h5>"
  let rock = '<img src="../photos/J0216112.JPG" class="img-fluid">' + "<h5 class='text-center bg-danger p-3'>Rock</h5>"
  let paper = '<img src="../photos/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg" class="img-fluid">' +"<h5 class='text-center bg-success p-3'>Paper</h5>"
  let comp = ["rock","paper","scissors"]
  let i = Math.floor(Math.random()*3)
  if(user == 'rock' && comp[i] == 'scissors'){
    document.querySelector('#player').innerHTML = rock
    document.querySelector('#comp').innerHTML = scissors
    document.querySelector('#winner').innerHTML = "YOU WIN !"
    wins++
    document.querySelector('#wins').innerHTML = "<p class='text-dark'>wins </p> " + wins

  } if(user == 'paper' && comp[i] == 'rock'){
      document.querySelector('#player').innerHTML = paper
      document.querySelector('#comp').innerHTML = rock
      document.querySelector('#winner').innerHTML = "YOU WIN !"
      wins++
      document.querySelector('#wins').innerHTML = "<p class='text-dark'>wins </p> " + wins
} if(user == 'scissors' && comp[i] == 'paper'){
    document.querySelector('#player').innerHTML = scissors
    document.querySelector('#comp').innerHTML = paper
    document.querySelector('#winner').innerHTML = "YOU WIN !"
    wins++
    document.querySelector('#wins').innerHTML = "<p class='text-dark'>wins </p> " + wins
}
  if(user == "rock" && comp[i] == "rock"){
   document.querySelector('#player').innerHTML = rock
   document.querySelector('#comp').innerHTML = rock
   document.querySelector('#winner').innerHTML = "It's A Tie"
   ties++
   document.querySelector('#ties').innerHTML = "<p class='text-dark'>draw </p> " + ties
 } if(user == "paper" && comp[i] == "paper"){
   document.querySelector('#player').innerHTML = paper
    document.querySelector('#comp').innerHTML = paper
    document.querySelector('#winner').innerHTML = "It's A Tie"
    ties++
    document.querySelector('#ties').innerHTML = "<p class='text-dark'>draw </p> " + ties

  }  if(user == "scissors" && comp[i] == "scissors"){
     document.querySelector('#player').innerHTML = scissors
     document.querySelector('#comp').innerHTML = scissors
     document.querySelector('#winner').innerHTML = "It's A Tie"
     ties++
     document.querySelector('#ties').innerHTML = "<p class='text-dark'>draw </p> " + ties

   }
  if(user == 'scissors' && comp[i] == 'rock'){
   document.querySelector('#player').innerHTML = scissors
   document.querySelector('#comp').innerHTML = rock

    document.querySelector('#winner').innerHTML = "You Lose"
    losses++
    document.querySelector('#loss').innerHTML = "<p class='text-dark'>loss </p> " + losses
 }
  if(user == 'rock' && comp[i] == 'paper'){
   document.querySelector('#player').innerHTML = rock
   document.querySelector('#comp').innerHTML = paper

    document.querySelector('#winner').innerHTML = "You Lose"
    losses++
    document.querySelector('#loss').innerHTML = "<p class='text-dark'>loss </p> " + losses
 }
  if(user == 'paper' && comp[i] == 'scissors'){
   document.querySelector('#player').innerHTML = paper
   document.querySelector('#comp').innerHTML = scissors

    document.querySelector('#winner').innerHTML = "You Lose"
    losses++
    document.querySelector('#loss').innerHTML = "<p class='text-dark'>loss </p> " + losses
 }


}
const clear = ()=>{
  ties = 0
  wins = 0
  losses = 0
  document.querySelector('#player').innerHTML = ""
  document.querySelector('#comp').innerHTML = ""
  document.querySelector('#winner').innerHTML = ""
  document.querySelector('#loss').innerHTML = ""
  document.querySelector('#wins').innerHTML = ""
  document.querySelector('#ties').innerHTML = ""
}
