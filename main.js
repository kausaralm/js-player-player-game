// Player player game
//console.log('connected'); checked file is connected

// select element
 const randomNumberElm = document.querySelector('#random-number')
 const luckyNumber = document.querySelector('#lucky-number')
 const playerOnePickNumberElm = document.querySelector('#player-1-pick-number')
 const playerOneElm = document.querySelector('#player-1')
 const playerTwoPickNumberElm = document.querySelector('#player-2-pick-number')
 const playerTwoElm = document.querySelector('#player-2')
 const resetBtnElm = document.querySelector('#reset-btn')

let randomNumber = '?'
let PlayerOnePickNumber = '?'
let playerTwoPickNumber = '?'
let resetBtn =''
//Random number Generate event
randomNumberElm.addEventListener('click', (e)=>{
        randomNumber = Math.floor(Math.random() * 20) + 1;
        luckyNumber.textContent = randomNumber;
        playerOnePickNumberElm.disabled = false;
        playerTwoPickNumberElm.disabled = false;
 })
//Player 1 button event
 playerOnePickNumberElm.addEventListener('click', (e)=>{
        PlayerOnePickNumber = Math.floor(Math.random() * 10)+1;
        playerOneElm.textContent = PlayerOnePickNumber
        if(randomNumber === PlayerOnePickNumber){
            alert('Player 1 Winner')
         }
         playerOnePickNumberElm.disabled = true;
         playerTwoPickNumberElm.disabled = false;

 })
//Player 2 button event
 playerTwoPickNumberElm.addEventListener('click', (e)=>{
        playerTwoPickNumber = Math.floor(Math.random() *10)+1;
        playerTwoElm.textContent = playerTwoPickNumber
        if(randomNumber === playerTwoPickNumber){
            alert('Player 2 Winner')
        }
       playerTwoPickNumberElm.disabled = true;
       playerOnePickNumberElm.disabled = false;

 })
//Reset button event
 resetBtnElm.addEventListener('click', (e)=>{
    // randomNumber = '?'
    // PlayerOnePickNumber = '?'
    // playerTwoPickNumber = '?'
    location.reload();
    
 })