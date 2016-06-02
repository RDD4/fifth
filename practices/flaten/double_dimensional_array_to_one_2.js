
function double_to_one(collection) {
    var array = new Array();
    for(var i=0;i<collection.length;i++)
    {
        for(var j=0;j<collection[i].length;j++)
        {
            array.push(collection[i][j]);
        }
    }
    var newarray = new Array();
    for(var i in array)
    {
        if(newarray.indexOf(array[i])==-1)
        {
            newarray.push(array[i]);
        }
    }
    return newarray;
}

module.exports = double_to_one;
