function backwardString(x){
const array=x.split("")
let newWord = ""
for (let i = array.length-1; i >= 0 ; i--) {
    newWord += array[i]
    
}
console.log(newWord)
}
backwardString("ejemplo")