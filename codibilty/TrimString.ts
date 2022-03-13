export function solution(message: string,K:number):string{
    let output: string = '';
    if(message.length <= K){
        output = message.trim();
    }
    else if(message.length > K){
        let tempArray = message.split('');
        console.log(tempArray)
        for(let i=K;i>=0;i--){
            if(tempArray[i]=== ' ') {
                output = message.substring(0,i).trim();
                break;
            }
        }
    }
    return output;
}