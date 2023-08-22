function backwardString(x){
    const array=x.split("")
    let newWord = ""
    for (let i = array.length-1; i >= 0 ; i--) {
        newWord += array[i]
        
    }
    return newWord
    }

function esPalindromo(y){
    z = backwardString(y)
    return z==y 
}

console.log(esPalindromo("reconocer"))
/*

function ordenar(arr){
    for (let i = 0; i < arr.length-1; i++) {
        const element = arr[i];
        const nextElement = arr[i+1];
        console.log(`${element} and ${nextElement}`)
        if(element>nextElement){
            arr.splice(i+2,0,arr[i])
            arr.splice(i,1)
            console.log(arr)
            console.log("There is a problem")
        }
    }
    console.log(arr)
}
ordenar([4,1,36,45,723,235,55,24,66,72,2,3])
*/