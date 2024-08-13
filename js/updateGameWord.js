export const updateWord = (letter, word, answerWord) => {
  if (word.split('').includes(letter)) {
    for (let i = 0; i < word.length; i++) {
      if (answerWord[i] === letter.toLowerCase()) {
        alert('The letter already exists');
      } else if (word[i] === letter) {
        answerWord[i] = letter.toLowerCase();
      }
    }
  } else {
    return false;
  }
  return answerWord;
};
