class Puzzle {
  constructor(puzzleObj) {
    this.answer = (puzzleObj.correct_answer).toUpperCase();
    this.category = puzzleObj.category;
    this.description = puzzleObj.description;
    this.numberOfWords = puzzleObj.number_of_words;
    this.totalLetters = puzzleObj.total_number_of_letters;
    this.lettersInFirst = puzzleObj.first_word;
  }

  validateGuess(selectedLetter) {
    if (this.answer.toUpperCase().includes(selectedLetter)) {
      domUpdates.displayLetter(selectedLetter);
      return true;
    }
    return false;
  }

  isLetterAVowel(selectedLetter) {
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    if (vowels.includes(selectedLetter)) {
      return true;
    }
  }

  checkAnswer(userGuess) {
    userGuess = userGuess.toUpperCase()
    if (userGuess === this.answer) {
      return true;
    } else {
      return false;
    }
  }
}

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}