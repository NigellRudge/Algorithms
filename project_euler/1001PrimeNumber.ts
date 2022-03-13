import {isPrime} from "../utils/Utils";

export function solution(N:number):number{
    let output:number = 0
    let counter = 0
    while(counter < N){
        output++
        if(isPrime(output)){
            counter++
        }
    }
    return output;
}