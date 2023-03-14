const dice = document.querySelector('.dice');
const diceRoll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerActive = document.querySelector('.player--active');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');


let play = true;
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
dice.classList.add('hidden');

function switchPlayer() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    (activePlayer === 0 ? activePlayer = 1 : activePlayer = 0);
}

diceRoll.addEventListener('click', function () {
    if (play) {

        let Number = Math.floor(Math.random() * 6 + 1);
        dice.src = `dice-${Number}.png`;
        dice.classList.remove('hidden');
        if (Number != 1) {
            currentScore += Number;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        }
        else {
            switchPlayer();
        }


    }

});

hold.addEventListener('click', function () {
    if (play) {
        score[activePlayer] += currentScore;
        if (score[activePlayer] >= 20) {
            player0.classList.remove('player--active');
            player1.classList.remove('player--active');
            document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            play = false;
            dice.classList.add('hidden');

        }
        else {
            document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
            switchPlayer();
        }
    }
});

newGame.addEventListener('click', function () {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    play = true;
    currentScore = 0;
    score = [0, 0];
    activePlayer = 0;
    dice.classList.add('hidden');
   
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    current0.textContent =0;
    current1.textContent = 0 ;
    score0.textContent = 0;
    score1.textContent = 0 ;


});