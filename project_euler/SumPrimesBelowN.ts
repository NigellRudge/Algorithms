import {isPrime} from "../utils/Utils";

export function solution(N:number):number{
    let output = 0
    for(let i=1;i<N;i++){
        if(isPrime(i)){
            output += i
        }
    }
    return output
}