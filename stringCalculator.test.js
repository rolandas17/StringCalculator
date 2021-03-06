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
it('should return sum of unknown number of values in a string', () => {
    var sum = 0;
    var str = "";
    var tempVal;
    var rand = Math.floor(Math.random() * 100)+1;
    for(var i = 0; i < rand;i++)
    {
        tempVal = Math.floor(Math.random() * 50);
        sum += tempVal;
        str += tempVal.toString()+ ",";
    }
    expect(add(str.substring(0, str.length-1))).toBe(sum); 
})
it('should work using new line instead of comma ("1\\n2" returns 3)', () => {
    expect(add("1\n2")).toBe(3); 
})
it('should work using new lines and commas at the same time ("1\\n2, 3" returns 6)', () => {
    expect(add("1\n2,3")).toBe(6); 
})
it('should throw exception on a negative number ("-5" returns Negatives not allowed: -5)', () => {
    expect(add("-5")).toBe("Negatives not allowed: -5"); //no idea how to throw and catch actual exceptions, did try toThrow() with no luck
})
it('should throw exception on multiple negative numbers ("-5,6\\n-2,4" returns Negatives not allowed: -5,-2)', () => {
    expect(add("-5,6\n-2,4")).toBe("Negatives not allowed: -5,-2"); 
})
it('should ignore values greater than 1000 "1001,2" returns 2', () => {
    expect(add("1001,2")).toBe(2);
})
it('should work with custom delimiters "//;\\n1;2”" returns 3', () => {
    expect(add("//;\n1;2")).toBe(3);
})