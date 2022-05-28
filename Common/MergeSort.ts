

export function mergeSort(array:number[]):number[]{
    if(array.length === 1 || array.length === 0)
        return array;

    const middle = Math.floor(array.length/2)
    const leftArray = array.slice(0,middle)
    const rightArray = array.slice(middle)

    return merge(
        mergeSort(leftArray),
        mergeSort(rightArray)
    );
}

function merge(leftArray:number[],rightArray:number[]):number[] {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while(indexLeft < leftArray.length && indexRight < rightArray.length){
        if(leftArray[indexLeft] < rightArray[indexRight]){
            result.push(leftArray[indexLeft])
            indexLeft++
        }
        else {
            result.push(rightArray[indexRight])
            indexRight++
        }
    }
    return result.concat(leftArray.slice(indexLeft)).concat(rightArray.slice(indexRight))
}
