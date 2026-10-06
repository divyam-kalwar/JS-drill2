// Find average salary based for each role ( You can find in hr array )
import data from "../dataset/drill2_dataset.js";

function avgSalary(data){
    const roles = {};

    for (const role of data.data) {
        const roleName = role.hr[0];
        const roleSalary = Number(role.hr[1].replace(/[$,]/g, ""));

        if (roles[roleName]) {
            roles[roleName].salary += roleSalary;
            roles[roleName].count++;
        } else {
            roles[roleName] = {
                salary: roleSalary,
                count: 1
            };
        }
    }

    const result = {};

    for (const role in roles) {
        result[role] = roles[role].salary / roles[role].count;
    }

    return result;
}

export default avgSalary;