import {checkIfAreEqual, getArrayTotal} from "../utils/Utils";

export function solution(A: number[] ): number{
    A = A.sort(function (a,b) {
        return a-b;
    });
    A = A.filter((item,index)=>{
        return item > 0
    })
    if(A.length  == 1){
        return 1
    }
    if(checkIfAreEqual(A)){
        return A.length
    }

    let output:number = 0;
    let target = getArrayTotal(A) / 2;
    let N = A.length
    while(getArrayTotal(A) > target){
        for(let i=N-1;i>=0;i--){
            if(A[i] > A[i-1]){
                A[i] = A[i]/2
                output++
                continue
            }
            A[i] = A[i]/2
        }
    }
    return output;
}