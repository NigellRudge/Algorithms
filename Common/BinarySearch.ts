
export function BinarySearch(array:number[],numberToFind:number) {
    let start = 0
    let end = array.length -1
    while(start <= end){
        let middle = Math.floor((end +   start)/2)
        if(array[middle] == numberToFind)
            return middle;
        if(array[middle] > numberToFind){
            end = middle
        }
        if(array[middle] < numberToFind){
            start = middle
        }
    }
}
