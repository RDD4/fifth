
function double_to_one(collection) {
    var array = new Array();
    for(var i=1;i<collection.length;i++)
    {
        for(var j=0;j<collection[i].length;j++)
        {
            array.push(collection[i][j]);
        }
    }
    array.unshift(1);
    return array;
}

module.exports = double_to_one;
