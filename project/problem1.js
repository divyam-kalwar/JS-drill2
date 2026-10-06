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
    let groupRoles = {};

    for(const role of data.data){
        const roleName = role.hr[0];
        const personName = role.name.join(" ");

        if(groupRoles.hasOwnProperty(role.hr[0])){
            groupRoles[roleName].push(personName);
        } else {
            groupRoles[roleName] = [personName];
        }
    }
    return groupRoles;
}

module.exports = roles;