function add(values)
{
    if(values.length === 0)
    {
        return 0;
    }
    else
    {
        if(values.includes(','))
        {
            var valArr = values.split(',');
            var sum = 0;
            valArr.forEach(function(value) {
                sum += parseInt(value);
              });
            return sum;
        }
        else
        {
            return parseInt(values);
        }  
    }
    
}
module.exports = add;