import {fibonacci} from "../utils/Utils";


function solution():number{
    let output = 0;
    let N = 1;
    while(fibonacci(N) < 4000000){
        if((fibonacci(N) % 2 )== 0){
            output += fibonacci(N)
        }
        N++
    }
    return output;
}