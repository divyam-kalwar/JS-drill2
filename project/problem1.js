 // Group the people based on the Role ( You can find in hr array )
  
  /*
  
  Sample output:
  
  {
    "Customer Support": ['Sninder Donna',...etc],
     "Javascript Developer": ['Bruce Michael',...etc]
     .
     .
     .so on
  
  }
    */

function roles(data){
    if(data === undefined || data.data === undefined || !Array.isArray(data.data)){
        return "Empty data provided";
    }
    return data.data.reduce((acc, curr) => {
        const roleName = curr.hr[0];
        const personName = curr.name.join(" ");

        if(acc.hasOwnProperty(roleName)){
            acc[roleName].push(personName);
        } else {
            acc[roleName] = [personName];
        }
        return acc;
    }, {});
}

module.exports = roles;