const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('has line breaks at the column number', () => {
    let sentence = wrap(
      "Hello, my name is Devin and I'm working with my partner Sarah",
      8
    );
    let sentenceArr = sentence.split('\n');
    expect(sentenceArr[0]).to.have.length(8);
  });
  it('does not allow words to be cut apart', () => {
    let sentence = wrap(
      "Hello, my name is Devin and I'm working with my partner Sarah",
      8
    );
    let words = sentence.split(' ');

    expect(words[1]).to.equal('my');
    expect(words[3]).to.equal('is');
  });
});
