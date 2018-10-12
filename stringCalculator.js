function add(values)
{
    if(values.length === 0)
    {
        return 0;
    }
    else
    {
        var delimiterCheck = 0;  
        if(values.includes(','))
        {
            delimiterCheck += 1;
        }
        if(values.includes("\n"))
        {
            delimiterCheck += 2;
        }
        if(delimiterCheck === 1)
        {
            var valArr = values.split(',');
            var sum = 0;
            valArr.forEach(function(value) {
                sum += parseInt(value);
              });
            return sum;
        }
        if(delimiterCheck === 2)
        {
            var valArr = values.split('\n');
            var sum = 0;
            valArr.forEach(function(value) {
                sum += parseInt(value);
              });
            return sum;
        }
        if(delimiterCheck === 3)
        {
            var valArr = values.split(/,|\n/);
            var sum = 0;
            valArr.forEach(function(value) {
                sum += parseInt(value);
              });
            return sum;
        }
        if(delimiterCheck === 0)
        {
            return parseInt(values);
        }
        
    }
    
}
module.exports = add;