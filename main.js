function equalityChecker(a,b){
    if(a == b){
        return 'Equal'
    }else{
        return 'Not Equal'
    }
};


function fahrenheitToCelsius(far){
    if(typeof far === "number"){
        let Cel = (far - 32) * 5/9
        return Math.round(Cel)+" C"
    }else{
        return false
    }
};

function operationFunc(a,b,operation){
    if(typeof a === 'number' && typeof b === 'number'){
        if(operation === "+"){
            return a + b
        }else if(operation === "-"){
            return a - b
        }else if(operation === "*"){
            return a * b
        }else if(operation === "/"){
            return a / b
        }else{
            return false
        }
    }else{
        return false
    }
}


console.log(equalityChecker(4,'4'));
console.log(fahrenheitToCelsius(81));
console.log(operationFunc(9,8,'+'));