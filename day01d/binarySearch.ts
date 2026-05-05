// The function receives two parameters and returns a number.
// The first parameter is an array of numbers, and the second is a target number,
// which is the value we want to find in the array.

// There are two variables at the beginning of the function: left and right.
// Left starts at 0, and right starts at the last index of the array,
// which is array.length - 1 (for example, if the array has 10 values, right starts at 9).

// While left is less than or equal to right, we continue the search.

// We calculate the middle index using:
// mid = Math.floor((left + right) / 2)

// The variable midValue represents the value at the middle index:
// midValue = arr[mid]

// If midValue is equal to the target, we return mid.

// If midValue is less than the target, we move left to mid + 1.
// Otherwise, we move right to mid - 1.

// If the loop ends and we didn't find the target,
// we return -1 as a sentinel value to indicate that the target was not found.

function binarySearchRecursive(
    arr: number[],
    target: number,
    left = 0,
    right = arr.length - 1
): number {
    if (left > right) return -1

    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === target) return mid

    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right)
    }

    return binarySearchRecursive(arr, target, left, mid - 1)
}

const array = [1,2,3,4,5,6,7,8,10,11,12]
const result = binarySearchRecursive(array, 7,)

console.log(result)

// the result is going to be 6, because 7 is at position 6.