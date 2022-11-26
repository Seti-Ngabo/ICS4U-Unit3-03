/**
 * This program does binary searching
 *
 * By:      Seti Ngabo
 * Version: 1.0
 * Since:   2022-11-08
 */

import promptSync from 'prompt-sync'
const prompt = promptSync()

/**
 *
 * Binary search function
 *
 * @param {number[]} New array
 * @param {number} Number the program is looking for
 * @param {number} Lowest number
 * @param {number} Highest number
 * @returns {number} binarySearch
 */

// process
function binarySearch(
  myArray: number[],
  myNumber: number,
  Int1: number,
  Int2: number
): number {
  // Base Condition
  if (Int1 > Int2) {
    return -1
  }

  // Find the middle index
  const middle = Math.floor((Int1 + Int2) / 2)

  // Compare mid with given key x

  if (myArray[middle] === myNumber) {
    return middle
  }

  // If element at mid is greater than x,
  // search in the left half of mid
  if (myArray[middle] > myNumber) {
    return binarySearch(myArray, myNumber, Int1, middle - 1)
  } else {
    return binarySearch(myArray, myNumber, middle + 1, Int2)
  }
}

const min = 1
const max = 999
const size = 250

const randomNumberArray = new Array(size)

for (let count = 0; count < randomNumberArray.length; count++) {
  randomNumberArray[count] = Math.floor(Math.random() * max + min)
}

randomNumberArray.sort(function (a, b) {
  return a - b
})

// Input and output

console.log('Binary Search Program')
console.log('\n')
console.log('Sorted list of numbers')

for (let count = 0; count < randomNumberArray.length; count++) {
  process.stdout.write(`${String(randomNumberArray[count])}, `)
}
console.log('\n')

const userInput = Number(
  prompt(
    'What number are you searching for in the array (integer between 0 and 999): '
  )
)

if (isNaN(userInput)) {
  console.log('\nERROR: Invalid Input')
} else if (userInput > max || userInput < min) {
  console.log('\nERROR: Invalid Input')
} else {
  console.log(
    `Your number is in index: ${binarySearch(
      randomNumberArray,
      userInput,
      0,
      size - 1
    )}`
  )
}

console.log('\nDone.')
