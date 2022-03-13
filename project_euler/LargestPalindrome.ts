import {isPalindrome} from "../utils/Utils";

export function solution():number {
    let output: number = 0;
    let lowerLimit = 100;
    let upperLimit = 999;
    let product = 0
    for(let i = lowerLimit; i<=upperLimit;i++){
        for(let j=i;j<=upperLimit;j++){
            product = i * j
            if(isPalindrome(product.toString())){
                if(product > output){
                    output = product
                }
            }
        }
    }
    return output;
}