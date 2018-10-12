const add = require('./stringCalculator');

it('should return 0 on an empty string', () => {
    expect(add("")).toBe(0);
})
it('should return 1 on a string "1"', () => {
    expect(add("1")).toBe(1);
})
it('should return 3 on a string "1,2"', () => {
    expect(add("1,2")).toBe(3);
})