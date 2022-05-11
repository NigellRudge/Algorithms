//Problem 1
// @ts-ignore
export function solution(nums: number[], target: number): number[]| null {
    let output: number[] | null = null
    for(let i=0;i<nums.length;i++){
        for(let j=(i+1);j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                output = [i,j]
            }
        }
    }
    return output;
}


