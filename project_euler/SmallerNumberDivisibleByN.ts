export function solution(N:number):number{
    let output:number = 1
    whileLoop:
        while (true){
            for(let i=N;i>=1;i--){
                if(output % i !== 0){
                    break
                }
                if(output % i == 0 && i== 1){
                    break whileLoop;
                }
            }
            output++
        }
    return output;
}
