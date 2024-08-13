export const setupAnswerArr = ({ word }) => {
  const answerArr = [];
  for (let i = 0; i < word.length; i++) {
    answerArr[i] = '_';
  }
  return answerArr;
};
