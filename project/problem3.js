// Return an array with all the full names
function fullNames(data){
    if(data === undefined || data.data === undefined || !Array.isArray(data.data)){
        return "Empty data provided";
    }
    return data.data.reduce((names, item) => {
        names.push(item.name.join(" "));
        return names;
    }, []);
}

module.exports = fullNames;