const isArrayLengthOk = (arr, len) => {
    try {
        if(!arr && !len) throw new ReferenceError("Is there any value not given?")
        if(typeof arr != 'object') throw new TypeError("Are you sure your arr is an object?")
        if(typeof len != 'number') throw new TypeError("Where's the number?")
        if(arr.length != len) throw new RangeError("Array size different from given number!")
        return arr
    } catch (error) {
        if(error instanceof ReferenceError) console.log(error.message)
        if(error instanceof TypeError) console.log(error.message)        
        if(error instanceof TypeError) console.log(error.message)   
        if(error instanceof RangeError) console.log(error.message)     
    }
    finally {
        console.log(`Your array is: ${arr} & your array size given is ${len}`)
    }
}

isArrayLengthOk([0, 2],1)
