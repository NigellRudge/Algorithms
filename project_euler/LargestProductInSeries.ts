import {convertStringArrayToNumberArray, productArray} from "../utils/Utils";

export function solution(inputString:string, N:number):number {
    let output:number = 0
    let max = 0;
    let dataLength = inputString.length
    for(let i=0;i<dataLength-N;i++){
        let tempArray =  convertStringArrayToNumberArray(inputString.substring(i,i+N).split(''));
        if(output < productArray(tempArray)){
            output = productArray(tempArray)
        }
    }
    return output;
}