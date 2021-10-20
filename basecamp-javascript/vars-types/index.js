let isPalindrome = (word) => {
    try {
        if(!word) throw ReferenceError("Where's the word?")
        return word.split("").reverse().join("") === word
    } catch (error) {
        if(error instanceof Error) console.log(error.message)        
    }
} 
console.log(
    isPalindrome("amap")
)