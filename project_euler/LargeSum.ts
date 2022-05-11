

export function solution(input:number[]):string{
    let sum: bigint = BigInt(0)
    for(let item of input){
        sum += BigInt(item)
    }
    return sum.toString().substring(0,10)
}