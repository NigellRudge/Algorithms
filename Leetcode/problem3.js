"use strict";
/*
1. get all possible substrings
2. check if all possible substrings only have unique characters
3. check length of substring with only unique characters

*/
exports.__esModule = true;
exports.solution = exports.lengthOfLongestSubstring = void 0;
// solution 1
function areDistinct(str, i, j) {
    var visited = [];
    for (var k = i; k <= j; k++) {
        if (visited[str.charAt(k)])
            return false;
        visited[str.charAt(k)] = true;
    }
    return true;
}
function lengthOfLongestSubstring(str) {
    var n = str.length;
    var res = 0;
    for (var i = 0; i < n; i++)
        for (var j = i; j < n; j++)
            if (areDistinct(str, i, j))
                res = Math.max(res, j - i + 1);
    return res;
}
exports.lengthOfLongestSubstring = lengthOfLongestSubstring;
////
function solution(str) {
    var n = str.length;
    var res = 0;
    for (var i = 0; i < n; i++) {
        var visited = [];
        for (var j = i; j < n; j++) {
            if (visited[str.charAt(j)] === true) {
                break;
            }
            else {
                res = Math.max(res, j - i + 1);
                console.log("char: ".concat(str.charAt(j)));
                console.log("j: ".concat(j));
                console.log("i: ".concat(i));
                console.log("res: ".concat(res));
                console.log('--------------------------------------------------------');
                visited[str.charAt(j)] = true;
            }
        }
        visited[str.charAt(i)] = false;
    }
    return res;
}
exports.solution = solution;
