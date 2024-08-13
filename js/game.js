import { words } from './words.js';
import { selectionRandomWord } from './word_search.js';
import { setupAnswerArr } from './setAnswerWordArr.js';
import { updateWord } from './updateGameWord.js';

const textSpan = document.querySelector('#word-output');
const textWordSpan = document.querySelector('#word-pl');
const lifeSpan = document.querySelector('#span-life');
const formInput = document.querySelector('.form');

let life = 10;

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

// Відображаємо отримане закодоване слоао
showPlayerWord(answerWord);
// Збереження букви з інпута
formInput.addEventListener('submit', cheak);

function cheak(event) {
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

  if (life <= 0) {
    alert('Gema over');
    return;
  }
  if (!result.includes('_')) {
    alert(answerWord.join(' '));
    alert('Good job! The answer was ' + randomWord.word);
    return;
  }

  form.reset();
}
// Ігра іще лороблюється, хочу пофіксити баги з жизнями і зроити функцію резстарта, нова гра коли успішно проходимо гру
