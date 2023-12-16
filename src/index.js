class Scissors {
  constructor(string, d = false) {
    this.debug = d;
    this.phrase = string || '';
    this.result = [];
  }
}

module.exports.Scissors = Scissors;