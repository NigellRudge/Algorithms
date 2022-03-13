function sum3And5(N:number):number {
    let output = 0;
    for(let i=1;i<N;i++){
        if(i%3 == 0 || i%5==0){
            output += i;
        }
    }
    return output;
}