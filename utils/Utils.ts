export function isPrime(N:number):boolean{
    for(let i = 2, s = Math.sqrt(N); i <= s; i++)
        if(N % i === 0) return false;
    return N > 1;
}

export function isSet(A:number, B:number, C:number):boolean{
    let sum = (A * A) + (B * B)
    return (C*C) === sum;
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

export function productArray(inputArray:number[]):number{
    let output:number = 1
    for(let item of inputArray){
        output *= item
    }
    return output;
}

export function convertStringArrayToNumberArray(inputArray:string[]):number[]{
    let output: number[]=[]
    for(let item of inputArray){
        output.push(parseInt(item))
    }
    return output
}

export function isNaturalNumber(inputNumber:number):boolean{
    let output = false
    if(Math.floor(inputNumber) === inputNumber)
        output = true ;
    return output
}

export function convertStringToArray(input:string):number[]{
    let output: number[] = []
    let stringArray = input.split('')
    for(let item of stringArray){
        output.push(parseInt(item))
    }
    console.log(output)
    return output;
}

export function isEven(N:number):boolean {
    return N % 2 == 0;
}

export function LargestInArray(input: number[]): number {
    let max:number = 0
    for (let item of input){
        if(item > max){
            max = item
        }
    }
    console.log(max)
    return max;
}

export function triangular(N:number):number{
    if(N == 1){
        return 1
    }
    else{
        return N + triangular(N-1)
    }
}

export function swap(inputArray:any[],index1:number,index2:number){
    let temp = inputArray[index2]
    inputArray[index2] = inputArray[index1]
    inputArray[index1] = temp
    return inputArray;
}
