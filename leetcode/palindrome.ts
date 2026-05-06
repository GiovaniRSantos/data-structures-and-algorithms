function isPalindrome(x: number | string): boolean {
    const value = x.toString()

    const reversed = value
        .split('')
        .reverse()
        .join('')

    console.log(reversed)
    return value === reversed
}

console.log(isPalindrome(123))
console.log(isPalindrome(121))
console.log(isPalindrome('arara'))
console.log(isPalindrome('ararinha'))

// First store the value x as a string using variable value
// Then, created a reversed variable which -> split the string into unit (for example, 123 turn ['1', '2', '3']), then reverse de values changing places/ index and join again
// So return value equals to reversed (true or false) -> some examples above shows that cases as 'ararinha' would be something like 'ahnirara' and '123' would be '321'