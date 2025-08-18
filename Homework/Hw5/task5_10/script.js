let arrayMinValue = (numbers) => {
    let min = numbers[0]
    for (let number of numbers) {
        if (number > min) {
            min = number;
        }
    }
}
arrayMinValue([9, 3, 90, 56]);