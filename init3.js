for (let i = 0; i <= 100; i++) {
    if((i%3==0 || i%5==0) && i!=0){

        if(i%5!=0){
            console.log("Buzz")
        }
        else if(i%3!=0){
            console.log("Feed")
        }else{
            console.log("BuzzFeed")
        }
    }else{
        console.log(i)
    }
}