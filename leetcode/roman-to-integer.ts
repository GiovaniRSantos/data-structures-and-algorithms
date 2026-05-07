function romanToInt(s: string): number {
  const romanNumbers = new Map<string, number>()

  romanNumbers.set("I", 1)
  romanNumbers.set("V", 5)
  romanNumbers.set("X", 10)
  romanNumbers.set("L", 50)
  romanNumbers.set("C", 100)
  romanNumbers.set("D", 500)
  romanNumbers.set("M", 1000)

  let total = 0

  for (let i = 0; i < s.length; i++) {
    const current = romanNumbers.get(s[i])!
    const next = romanNumbers.get(s[i + 1]) || 0

    if (current < next) {
      total -= current
    } else {
      total += current
    }
  }

  return total
}

console.log(romanToInt('I'))
console.log(romanToInt('MCMXCIV'))

// First, we create a hashmap to store the Roman numeral values.
// Then, we create a variable called total initialized with 0.
//
// After that, we iterate through the string using a for loop.
// For each character, we get the current Roman numeral value
// and also the next value.
//
// If the current value is smaller than the next one,
// we subtract it from total.
// Otherwise, we add it to total.