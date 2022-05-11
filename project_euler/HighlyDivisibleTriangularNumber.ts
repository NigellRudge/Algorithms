import {triangular} from "../utils/Utils";

export function solution(N:number):number{
    let maxValue = 0
    let divisorsCount = 0
    let index = 1

    while(divisorsCount <= N){
        maxValue = triangular(index)
        divisorsCount = countDivisors(maxValue)
        console.log(`number:${maxValue}`)
        console.log(`divisorsCount:${divisorsCount}`)
        index++
    }
    return maxValue
}

export function countDivisors(N:number): number{
    let count = 0;
    for (let i =1;i<=N;i++){
        if(N % i == 0)
            count++
    }
    return count;
}