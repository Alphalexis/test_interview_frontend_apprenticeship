
export function getEvenNumbers(numbers) {
    //simple way to filter out even numbers
    return numbers.filter(number => number % 2 === 0);
  }

export function demoArrayStudy() {
    // As a proof of concept, results will show up in console
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenArray = getEvenNumbers(numbersArray);
  console.log('Even Numbers:', evenArray); 
}