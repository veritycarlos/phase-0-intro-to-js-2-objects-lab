// Write your solution in this file!
const employee = {
    name:"Sam",
    streetAddress: "11 Broadway",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
   ...employee,
   [key]: value,
    };
};


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key) {
    const newObj2 = {...employee[key]}
    delete newObj2[key]
    return newObj2
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}