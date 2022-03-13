/*
1. get all possible substrings
2. check if all possible substrings only have unique characters
3. check length of substring with only unique characters

*/

// solution 1
function areDistinct(str:string,i:number,j:number): boolean {
    let visited:boolean[] = [];
    for(let k = i; k <= j; k++)
    {
        if (visited[str.charAt(k)])
            return false;

        visited[str.charAt(k)] = true;
    }
    return true;
}

export function lengthOfLongestSubstring(str: string): number {
    let n = str.length;
    let res = 0;
    for(let i = 0; i < n; i++)
        for(let j = i; j < n; j++)
            if (areDistinct(str, i, j))
                res = Math.max(res, j - i + 1);
    return res;
}
////

export function solution(str:string):number {
    let n: number = str.length
    let res: number = 0

    for(let i:number=0;i<n;i++){
        let visited: boolean[] = []
        for(let j:number=i;j<n;j++){
            if(visited[str.charAt(j)] === true){
                break;
            }
            else{
                res = Math.max(res,j-i+1)
                console.log(`char: ${str.charAt(j)}`)
                console.log(`j: ${j}`)
                console.log(`i: ${i}`)
                console.log(`res: ${res}`)
                console.log('--------------------------------------------------------')
                visited[str.charAt(j)] = true
            }
        }
        visited[str.charAt(i)] = false;
    }
    return res;
}