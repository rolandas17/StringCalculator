const add = require('./stringCalculator');

it('should return 0 on an empty string', () => {
    expect(add("")).toBe(0);
})
