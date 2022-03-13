

function solution(inputValue: number){
    let div = 2
    let maxFactor: number
    while(inputValue != 0){
        if(inputValue % div != 0){
            div = div + 1
        }
        else {
            maxFactor = inputValue
            inputValue = inputValue / div
            if(inputValue == 1){
                return maxFactor
            }
        }
    }
}