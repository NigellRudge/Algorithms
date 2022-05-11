
export function solution(inputArray:number[],N:number,sum:number){
    let outputArray:number[] = []
    for(let i=0;i<N;i++){
        let temp = 0;
        outputArray.push(i+1);
        for(let j=i;j<N;j++){
            temp += inputArray[j]
            if(temp > sum){
                outputArray = [];
                break;
            }
            if(temp== sum){
                outputArray.push(j+1);
                return outputArray;
            }
        }
    }
    return [-1];
}
