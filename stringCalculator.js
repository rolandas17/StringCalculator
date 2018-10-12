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
            return parseInt(valArr[0])+parseInt(valArr[1]);
        }
        else
        {
            return parseInt(values);
        }  
    }
    
}
module.exports = add;