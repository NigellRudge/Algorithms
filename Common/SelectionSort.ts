
export function solution(inputArray:number[], N:number|null){
    N = N == null ? inputArray.length: N;
    for(let i =0;i<N;i++){
        for(let j = i+1;j<N;j++){
            if(inputArray[j] < inputArray[i]){
                let temp = inputArray[i]
                inputArray[i] = inputArray[j]
                inputArray[j] = temp
            }
        }
    }
    return inputArray;
}
