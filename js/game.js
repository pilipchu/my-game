import { words } from './words.js';
import { selectionRandomWord } from './word_search.js';
import { setupAnswerArr } from './setAnswerWordArr.js';
import { updateWord } from './updateGameWord.js';

const textSpan = document.querySelector('#word-output');
const textWordSpan = document.querySelector('#word-pl');
const lifeSpan = document.querySelector('#span-life');
const formInput = document.querySelector('.form');
const resetBtn = document.querySelector('#reset-btn');

let life = 10;
let win = false;
let reset = false;

// отримуємо случайний обєкт з масиву
const randomWord = selectionRandomWord(words);

// Розбивання рядка на масив з закодованими буквами
const answerWord = setupAnswerArr(randomWord);

function showPlayerWord(word) {
  if (word.length !== 0) {
    const text = word.join(', ');
    textSpan.textContent = text;
    textWordSpan.textContent = randomWord.explanation;
    lifeSpan.textContent = 10;
  } else {
    return '';
  }
}

async function getWin() {
  return (win = true);
}

function resetGame() {
  return (reset = true);
}

// Відображаємо отримане закодоване слоао
showPlayerWord(answerWord);

resetBtn.addEventListener('click', () => {
  resetGame();
});

// Збереження букви з інпута

formInput.addEventListener('submit', cheak);

function cheak(event) {
  if (!win) {
    if (life > 0) {
      event.preventDefault();
      const form = event.target;
      const letter = form.elements.letter.value;

      if (letter === '' || letter.length !== 1) {
        alert('Please enter a single letter');
      }

      const result = updateWord(letter, randomWord.word, answerWord);

      if (result !== false) {
        textSpan.textContent = result;
      } else {
        life -= 1;
        lifeSpan.textContent = life;
      }
      form.reset();
      if (result !== false && !result.includes('_')) {
        getWin();
        alert(answerWord.join(' '));
        alert('Good job! The answer was ' + randomWord.word);
      }
    } else {
      alert('Game over');
      alert('Try again');
    }
  }
}
// Ігра іще лороблюється, хочу пофіксити баги з жизнями і зроити функцію резстарта, нова гра коли успішно проходимо гру
