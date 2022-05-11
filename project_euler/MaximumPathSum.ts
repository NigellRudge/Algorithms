import {LargestInArray} from "../utils/Utils";

export function solution(input: number[][]) {
    let maxValue: number = 0
    for(let numberArray of input){
        maxValue += LargestInArray(numberArray)
    }
    return maxValue;
}