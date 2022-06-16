// Player player game
//console.log('connected'); checked file is connected

// select element

const p1ScoreElm = document.querySelector('#p1Score');
const p2ScoreElm = document.querySelector('#p2Score');
const playingToElm = document.querySelector('.playingTo');
const inputScoreElm = document.querySelector('#inputScore')
const p1BtnElm = document.querySelector('#p1Btn');
const p2BtnElm = document.querySelector('#p2Btn')
const resetBtnElm = document.querySelector('#resetBtn')
const formElm = document.querySelector('form')

let p1Score = 0
let p2Score = 0
let winningScore = 5
let gameOver = false
let turnPlayer = 'p1'
// update winning score/PlayingToScore into Dom
playingToElm.textContent = winningScore 

//Disable player button based on Turn 
turnPlayer ==='p1' ? p2BtnElm.setAttribute('disabled', 'disabled') :p1BtnElm.setAttribute('disabled', 'disabled')

//function =  Single responsibility principle
//inputing and updating playing to Score

function validationInput(score){
    if(score <1){
        alert('please provide a value more than 0');
    }
}

formElm.addEventListener('submit', (evt)=>{
    evt.preventDefault()
    //getting input area value
    inputScoreElm.value 
    const inputScore = inputScoreElm.value

    //validation check
    validationInput(inputScore)
    //saving it into data layer
    winningScore = +inputScore
    //showing the value on Dom
    playingToElm.textContent = inputScore;

    //reset the input
    inputScoreElm.value = ''
})

//Player 1 button 

p1BtnElm.addEventListener('click', (evt)=>{
    //increase the count conditionally
    if(turnPlayer ==='p1' && !gameOver && p1Score < winningScore){
        p1Score++
        // update the Dom
        p1ScoreElm.textContent = p1Score
        // change player turn 
        turnPlayer = 'p2'
        // Disable p1 button
        p1BtnElm.setAttribute('disabled', 'disabled')
        //enabled p2 button
        p2BtnElm.removeAttribute('disabled')
    }
    
    if(p1Score === winningScore){
        gameOver = true
        //disable player 1 or player 2 button
        p1BtnElm.setAttribute('disabled', 'disabled') 
        p2BtnElm.setAttribute('disabled', 'disabled') 
        //show message
        alert('player 1 is winner')
    }
})

p2BtnElm.addEventListener('click', (evt)=>{
    //incrase the count conditionally
    if(turnPlayer ==='p2' && !gameOver && p2Score < winningScore){
        p2Score++
        // update the Dom
        p2ScoreElm.textContent = p2Score
        // change player turn
        turnPlayer = 'p1'
        // Disable p2 button
        p2BtnElm.setAttribute('disabled', 'disabled')
        // enabled p1 button
        p1BtnElm.removeAttribute('disabled')
    }

    if(p2Score === winningScore){
        gameOver = true
           //disable player 1 or player 2 button
           p1BtnElm.setAttribute('disabled', 'disabled') 
           p2BtnElm.setAttribute('disabled', 'disabled') 
           //show message
           alert('player 2 is winner')
    }

})

// Reset event

resetBtnElm.addEventListener('click', (evt)=>{
    p1Score = 0
    p2Score = 0
    winningScore = 5
    gameOver = false
    turnPlayer ='p2'
    p1BtnElm.removeAttribute('disabled')
    p2BtnElm.removeAttribute('disabled')
    p1ScoreElm.textContent = p1Score
    p2ScoreElm.textContent = p2Score
    playingToElm.textContent = winningScore
})

