import {swap} from "../utils/Utils";

export function BubbleSort(inputArray:number[]){
    outerLoop:
    while(true){
        for(let i = 0;i<inputArray.length;i++){
            if(i < inputArray.length-1){
                if(inputArray[i]> inputArray[i+1]){
                    inputArray = swap(inputArray,i,(i+1))
                    continue outerLoop;
                }
            }
        }
        break;
    }
    return inputArray;
}
