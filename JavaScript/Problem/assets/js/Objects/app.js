/**
=> Problem 1: Write a JavaScript program to list the properties of a JavaScript object.
Sample object:
    var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
Sample Output: 
    name,sclass,rollno
 */

// My Own Solution
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
}

const keysOfStudent = Object.keys(student);
const keysToStrOfStd = keysOfStudent.toString();
console.log(keysToStrOfStd);

// My Solution 2
const findKeys = obj => {
    const keysArr = [];
    if (Array.isArray(obj)) {
        console.log("You should enter object!");
    } else if (obj === null) {
        console.log("You should enter object!");
    } else if (typeof(obj) === 'object') {
        for (const key in obj) {
            keysArr.push(key)
        }
    }

    return [keysArr]
}

const student2 = {
    name: 'Tusar',
    class: 'BSC in CSE',
    roll: 62
}


const [keysArr] = findKeys(student2);
console.log(keysArr.toString());