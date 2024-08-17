function reverseArray(array) {
  const newArray = [...array];

  newArray.reverse();

  return newArray;
}

const inputArray = [1, 2, 3, 4, null];
const reversedArray = reverseArray(inputArray);

console.log(reversedArray);
console.log(inputArray);
