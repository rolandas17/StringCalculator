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
    str+= "0";
    expect(add(str)).toBe(sum); 
})
it('should work using new line instead of comma ("1\\n2" returns 3)', () => {
    expect(add("1\n2")).toBe(3); 
})
it('should work using new lines and commas at the same time ("1\\n2, 3" returns 6)', () => {
    expect(add("1\n2,3")).toBe(6); 
})
