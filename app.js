const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');


//Removing the mole, which means creatina new  grid without a mole

function randomSquare(){
    squares.forEach(square =>{
        square.callList.remove('mole')
    })


    let randomSquare = square[Math.floor(Math.random() * 9)]
    randomeSquare.classList.add('.mole')


}
