export function isPrime(inputNumber:number):boolean{
    let output = true;
    if(inputNumber == 1)
        return false
    if(inputNumber == 2)
        return true;
    for(let i=2; i<inputNumber;i++){
        if(inputNumber % i == 0){
            output = false
        }
    }
    return output;
}

export function factorial(N:number):number {
    if(N == 0 || N== 1)
        return 1
    else{
        return N * factorial(N-1);
    }
}
export function isPalindrome(inputValue: string):boolean{
    return inputValue === inputValue.split('').reverse().join('')
}

export function fibonacci(N:number): number {
    if(N <= 1)
        return 1
    return fibonacci(N-1) + fibonacci(N-2)
}

export function getArrayTotal(A:number[]):number{
    return A.reduce(function(total,a){
        return total + a;
    },0)
}

export function checkIfAreEqual(A:number[]):boolean{
    return A.every((item,index)=>{
        return item === A[0]
    })
}
