export function solution(N:number, K:number) {
    let output:number = 0
    let powerValue = BigInt(Math.pow(N,K));
    let numberArray = powerValue.toString().split('');
    for(let item of numberArray){
        output += parseInt(item);
    }
    return output;
}