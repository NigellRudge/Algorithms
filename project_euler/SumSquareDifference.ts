function sumSquare(N:number): number{
    let output: number = 0
    for(let i=1;i<=N;i++){
        output += ( i * i)
    }
    console.log(output)
    return output;
}

function squareSum(N:number):number {
    let output:number = 0;
    for(let i=1;i<=N;i++){
        output += i;
    }
    console.log(output * output)
    return (output * output)
}

export function solution(N:number){
    return squareSum(N) - sumSquare(N);
}