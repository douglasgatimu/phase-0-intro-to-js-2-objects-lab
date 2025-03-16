// Write your solution in this file!
let employee = {
    name : 'John Doe',
    streetAddress : 'KICC'
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newobj = {...obj};
    newobj[key] = value;
    return newobj
}
console.log(updateEmployeeWithKeyAndValue(employee, 'name', 'Jane Doe'));
console.log(employee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', 'ABC'));

function deleteFromEmployeeByKey(obj, key) {
    let newobj = {...obj};
    delete newobj[key]
    return newobj
}

console.log(deleteFromEmployeeByKey(employee, 'streetAddress'));

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    return obj
}
employee = {
    name : 'Jay P',
    streetAddress : 'Vegas'
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));