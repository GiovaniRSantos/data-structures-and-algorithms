function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const complement = target - current

    if (map.has(complement)) {
      return [map.get(complement)!, i]
    }

    map.set(current, i)
  }

  return []
}

const arrayNums = [1,2,3,4,5,6] 
const result = twoSum(arrayNums, 5)

console.log(result)

// The function starts by creating a map to store the numbers that have already been processed,
// using the format value -> index.

// Then, we create a variable called current to store the current number (nums[i]).

// After that, we create a variable called complement, which stores target - current.

// In the if statement, we check if the map contains the complement.
// In other words, we check if the number we need has already been seen.

// If it exists, we return the indices.
// Otherwise, we store the current number and its index in the map using map.set(current, i).