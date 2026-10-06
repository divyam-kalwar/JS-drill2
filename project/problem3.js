// Return an array with all the full names
function fullNames(data){
    let names = [];
    for(const item of data.data){
        names.push(item.name.join(" "));
    }
    return names;
}

module.exports = fullNames;