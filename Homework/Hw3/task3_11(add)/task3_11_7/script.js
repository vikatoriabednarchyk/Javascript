let arr = [2,17,13,6,22,31,45,66,100,-18];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
}

console.log(arr);