const findUniqueElements = (arr) => {
    // Edge Case 
    if (!arr || Array.isArray(arr) === false || arr.length === 0) return [];

    // Base Case
    const myObj={};

    arr.forEach((num, i) => {
        if (myObj[i] !== i) {
            myObj[i] = num;
        }
    })

    return myObj
}

const result3 = findUniqueElements([1, 2, 2, 3, 4, 4, 5]);
console.log(result3);


const myObj = {
    1: 10,
    2: 20
}

console.log(myObj['1'] === 10);
