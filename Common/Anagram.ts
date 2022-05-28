/*
 Anagrams: given a list of words, where some of them are anagrams of each other, return a list of lists of
 words where each internal list has only words that are anagrams between themselves. Example:

    Input: ["god", "dog",  "heart", "cat", "dog", "earth"]
    Output: [ ["god", "dog", "dog"], [ "cat" ], ["heart", "earth"] ]

*/

function compare(word1:string, word2:string):boolean{
    return word1.split("").sort().join("") === word2.split("").sort().join("")
}

function toAlpha(word:string):string{
    return word.split("").sort().join("")
}

function solution(inputArray:string[]):Map<string,string[]>{
    let output = new Map<string,string[]>();
    for(let i = 0;i<inputArray.length;i++){
        let word = inputArray[i]
        if(!output.has(toAlpha(word))){
            let anagramArray = []
            for(let j=i;j<inputArray.length;j++){
                if(compare(word,inputArray[j])){
                    anagramArray.push(inputArray[j])
                }
            }
            output.set(toAlpha(word),anagramArray)
        }
    }
    return output;
}

