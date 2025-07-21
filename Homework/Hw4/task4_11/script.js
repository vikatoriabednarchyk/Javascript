function sum (array){
    let result = 0;
    for (let item of array) {
        result = result + item;
    }
    return result;
}
console.log(sum([1,2,10]));