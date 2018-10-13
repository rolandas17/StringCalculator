function add(values)
{
    if(values.length === 0)
    {
        return 0;
    }
    else
    {
        var negative = false;
        if(values.includes('-')){
            negative = true;
        }
            

        var delimiterCheck = 0;

        if(values.includes(','))
            delimiterCheck += 1;
        
        if(values.includes("\n"))
            delimiterCheck += 2;

        if(delimiterCheck === 0)
            if(negative)
            {
                return ("Negatives not allowed: "+values);
            }
            else
                return parseInt(values);
            

        var valArr;

        if(delimiterCheck === 1)
            valArr = values.split(',');

        if(delimiterCheck === 2)
            valArr = values.split('\n');

        if(delimiterCheck === 3)
            valArr = values.split(/,|\n/);
        
        if(negative)
        {
            var negativeString = "";
            valArr.forEach(function(value) {
                if(parseInt(value) < 0)
                    negativeString += value +",";
                });
                //remove extra comma at the end
                negativeString = negativeString.substring(0, negativeString.length-1);
            return ("Negatives not allowed: "+negativeString);
        }
        var sum = 0;
            valArr.forEach(function(value) {
                sum += parseInt(value);
              });
        return sum;
    }
    
}

module.exports = add;
