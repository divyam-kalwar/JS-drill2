// Find average salary based for each role ( You can find in hr array )
import data from "../dataset/drill2_dataset.js";

function avgSalary(data){
    if(data === undefined || data.data === undefined || !Array.isArray(data.data)){
        return "Empty data provided";
    }

    return data.data.reduce((acc, curr) => {
        const roleName = curr.hr[0];
        const roleSalary = Number(curr.hr[1].replace(/[$,]/g, ""));

        if (acc[roleName]) {
            acc[roleName].salary += roleSalary;
            acc[roleName].count++;
        } else {
            acc[roleName] = {
                salary: roleSalary,
                count: 1
            };
        }
        return acc;
    }, {});
}

export default avgSalary;