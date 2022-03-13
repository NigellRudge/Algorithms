"use strict";
exports.__esModule = true;
exports.isNaturalNumber = exports.convertStringArrayToNumberArray = exports.productArray = exports.checkIfAreEqual = exports.getArrayTotal = exports.fibonacci = exports.isPalindrome = exports.factorial = exports.isPrime = void 0;
function isPrime(N) {
    for (var i = 2, s = Math.sqrt(N); i <= s; i++)
        if (N % i === 0)
            return false;
    return N > 1;
}
exports.isPrime = isPrime;
function factorial(N) {
    if (N == 0 || N == 1)
        return 1;
    else {
        return N * factorial(N - 1);
    }
}
exports.factorial = factorial;
function isPalindrome(inputValue) {
    return inputValue === inputValue.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
function fibonacci(N) {
    if (N <= 1)
        return 1;
    return fibonacci(N - 1) + fibonacci(N - 2);
}
exports.fibonacci = fibonacci;
function getArrayTotal(A) {
    return A.reduce(function (total, a) {
        return total + a;
    }, 0);
}
exports.getArrayTotal = getArrayTotal;
function checkIfAreEqual(A) {
    return A.every(function (item, index) {
        return item === A[0];
    });
}
exports.checkIfAreEqual = checkIfAreEqual;
function productArray(inputArray) {
    var output = 1;
    for (var _i = 0, inputArray_1 = inputArray; _i < inputArray_1.length; _i++) {
        var item = inputArray_1[_i];
        output *= item;
    }
    return output;
}
exports.productArray = productArray;
function convertStringArrayToNumberArray(inputArray) {
    var output = [];
    for (var _i = 0, inputArray_2 = inputArray; _i < inputArray_2.length; _i++) {
        var item = inputArray_2[_i];
        output.push(parseInt(item));
    }
    return output;
}
exports.convertStringArrayToNumberArray = convertStringArrayToNumberArray;
function isNaturalNumber(inputNumber) {
    var output = false;
    if (Math.floor(inputNumber) === inputNumber)
        output = true;
    return output;
}
exports.isNaturalNumber = isNaturalNumber;
