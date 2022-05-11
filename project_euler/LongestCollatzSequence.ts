import {isEven} from "../utils/Utils";

export function solution(N:number):number[] {
    let output: number = 0
    let maxNumber: number = 0
    let maxCount:number = 1

    for(let i=N;i>1;i--){
        let n = i;
        let count = 0
        while(n > 1){
            if(isEven(n)){
                n = n/2
            }
            else{
                n = (3 * n )+ 1
            }
            count++
        }
        if(count > maxCount){
            maxCount = count
            maxNumber = i
        }
    }
    return [maxNumber,maxCount];
}