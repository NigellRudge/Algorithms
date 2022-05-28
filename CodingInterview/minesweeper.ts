
/*
* example data
* ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "#", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"]
*
* example output
*["0", "0", "0", "0", "0"],
  ["0", "1", "1", "1", "0"],
  ["0", "1", "#", "1", "0"],
  ["0", "1", "1", "1", "0"],
  ["0", "0", "0", "0", "0"],
*
*
* */

function countMines(inputArray:string[][],rowIndex:number,elementIndex:number):string{
    let output = 0;
    //check left
    if(inputArray[rowIndex][elementIndex-1] !== undefined){
        if(inputArray[rowIndex][elementIndex-1] == "#"){
            output++;
        }
    }
    //check right
    if(inputArray[rowIndex][elementIndex+1] !== undefined){
        if(inputArray[rowIndex][elementIndex+1] == "#"){
            output++;
        }
    }
    //check above
    if(inputArray[rowIndex-1]!== undefined){
        if(inputArray[rowIndex-1][elementIndex] == "#"){
            output++;
        }
    }
    //check below
    if(inputArray[rowIndex+1] !== undefined){
        if(inputArray[rowIndex+1][elementIndex] == "#"){
            output++;
        }
    }
    //check diagionally
    if(inputArray[rowIndex+1] !== undefined ){
        if(inputArray[rowIndex+1][elementIndex+1] !== undefined){
            if(inputArray[rowIndex+1][elementIndex+1] == "#"){
                output++;
            }
        }
    }
    if(inputArray[rowIndex-1] !== undefined){
        if(inputArray[rowIndex-1][elementIndex+1] !== undefined){
            if(inputArray[rowIndex-1][elementIndex+1] == "#"){
                output++;
            }
        }

    }
    if(inputArray[rowIndex+1] !== undefined){
        if( inputArray[rowIndex+1][elementIndex-1] !== undefined){
            if(inputArray[rowIndex+1][elementIndex-1] == "#"){
                output++;
            }
        }

    }
    if(inputArray[rowIndex-1] !== undefined){
        if( inputArray[rowIndex-1][elementIndex-1] !== undefined){
            if(inputArray[rowIndex-1][elementIndex-1] == "#"){
                output++;
            }
        }
    }
    return output.toString();
}


// @ts-ignore
function solution(input:any[][]):any[][]{
    for(let i = 0 ; i < input.length;i++){
        for(let j = 0 ; j < input[i].length;j++){
            if(input[i][j] == "-"){
                input[i][j] = countMines(input,i,j)
            }
        }
    }
    return input;
}


const input = [
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "#", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "-", "-"]
]

console.log(solution(input))
