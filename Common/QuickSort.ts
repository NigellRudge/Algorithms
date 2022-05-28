

function swap(arr:any[],index1:number,index2:number){
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

function partition(array:number[],low:number,high:number){
    let pivot = array[high]
    let i = low - 1

    for(let j=low;j<high;j++){
        if(array[j] < pivot){
            i++
            swap(array,i,j)
        }
    }
    swap(array,i+1,high)
    return (i+1)
}

export function quicksort(array:number[], low:number,high:number){
    if(low < high){
        let p = partition(array,low,high)
        quicksort(array,low,p-1)
        quicksort(array,p+1,high)
    }
}
