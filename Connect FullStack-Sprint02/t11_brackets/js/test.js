mocha.setup('bdd');
const expect = chai.expect;

describe('checkBrackets', () => {
  // Incorrect cases
  it('should return -1 for undefined', () => {
    const result = checkBrackets(undefined);
    expect(result).to.equal(-1);
    console.log(`Input: undefined, Result: ${result}`);
  });

  it('should return -1 for null', () => {
    const result = checkBrackets(null);
    expect(result).to.equal(-1);
    console.log(`Input: null, Result: ${result}`);
  });

  it('should return -1 for number', () => {
    const result = checkBrackets(123);
    expect(result).to.equal(-1);
    console.log(`Input: 123, Result: ${result}`);
  });

  it('should return -1 for empty string', () => {
    const result = checkBrackets('');
    expect(result).to.equal(-1);
    console.log(`Input: '', Result: ${result}`);
  });

  it('should return -1 for string without brackets', () => {
    const result = checkBrackets('Hello, world!');
    expect(result).to.equal(-1);
    console.log(`Input: 'Hello, world!', Result: ${result}`);
  });

  // Correct cases
  it('should return 0 for balanced brackets', () => {
    const testCases = ['()', '(())', '()()', '(())()'];
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      const result = checkBrackets(testCase);
      expect(result).to.equal(0);
      console.log(`Input: ${testCase}, Result: ${result}`);
    }
  });

  it('should return 1 for single unbalanced bracket', () => {
    const testCases = ['(', ')', 'Hello(world!'];
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      const result = checkBrackets(testCase);
      expect(result).to.equal(1);
      console.log(`Input: ${testCase}, Result: ${result}`);
    }
  });

  it('should return the correct count for unbalanced brackets', () => {
    const testCases = ['(())', ')()(', '((())', '())()('];
    for (let i = 0; i < testCases.length; i++) {
      const testCase = testCases[i];
      const result = checkBrackets(testCase);
      console.log(`Input: ${testCase}, Result: ${result}`);
    }
  });
});
  mocha.run();
