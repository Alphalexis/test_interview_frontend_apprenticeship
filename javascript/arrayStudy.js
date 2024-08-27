

function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
    //if the number is even, it will be returned in the new correct array
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArray = getEvenNumbers(numbersArray);


console.log(evenArray);
