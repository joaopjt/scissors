class Champagne {
  constructor(string, d = false) {
    this.debug = d;
    this.phrase = string || '';
    this.result = [];
  }
}

module.exports.Champagne = Champagne;