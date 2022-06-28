function primos(x){
    for(i = 2; i < x; i++ ){
        if(x % i === 0){
            return false
        }
    }
    return true
}


function prime(x){
    let valores = " "

    for(let i = 1; i <= x; i++){ 

    if(i % 2 !== 0){
    valores +=   "Snap"
    }

    if(i % 5 === 0 && i % 2 !== 0){
        valores += "Crackle"
        }

    if(i % 5 === 0 && i % 2 === 0){
    valores += "Crackle"
    }
    
    if(primos(i)){
        valores += "Prime"
        }

     else if(i % 2 === 0 && i % 5 !== 0){
        valores  += i
        }

    if(i < x){
    valores += ", "
    } 
    }
    return valores
}
console.log(prime(30))