// Write your solution in this file!
const employee = {
    name: "Sid",
    streetAddress: "123 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}
const Sam = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "12 Broadway"
)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee};
    delete newEmployee.name
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee
}
console.log(deleteFromEmployeeByKey)