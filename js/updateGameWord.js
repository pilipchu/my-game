import { life } from './inform.js';
export const updateWord = (letter, word, answerWord) => {
  if (word.split('').includes(letter.toLowerCase())) {
    for (let i = 0; i < word.length; i++) {
      if (answerWord[i] === letter.toLowerCase()) {
        alert('The letter already exists');
      } else if (word[i] === letter.toLowerCase()) {
        answerWord[i] = letter.toLowerCase();
      }
    }
  } else {
    return false;
  }
  return answerWord;
};
