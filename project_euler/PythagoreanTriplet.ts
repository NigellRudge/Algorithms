import {isNaturalNumber} from "../utils/Utils";

function isSet(A:number, B:number, C:number):boolean{
    let sum = (A * A) + (B * B)
    return (C*C) === sum;
}

export function solution(N:number=1000):number {
    let output:number = 0
    outerLoop:
    for (let A=1;A<N;A++){
        for(let B = (A+1);B < N;B++){
            let C = Math.sqrt((A * A) + (B * B))
            let total = A + B + C
            if(isNaturalNumber(C)){
                if(total === N){
                    console.log([A,B,C])
                    output = A * B * C
                    break outerLoop;
                }
            }
        }
    }
    return output;
}