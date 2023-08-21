let name= prompt("Welcome, please give me your name:")
let age = prompt("Thanks, now give me your age:")

if(age>18 && age <= 65){
    greet();
}else{
    alert("Im sorry")
}

const greet = () => {
    message = age >= 50 ?"Welcome Sir/Mam to La la Land" : "asd";
}