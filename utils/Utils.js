"use strict";
exports.__esModule = true;
exports.ArrayIsSorted = exports.insertElementAt = exports.swap = exports.triangular = exports.LargestInArray = exports.isEven = exports.convertStringToArray = exports.isNaturalNumber = exports.convertStringArrayToNumberArray = exports.productArray = exports.checkIfAreEqual = exports.getArrayTotal = exports.fibonacci = exports.isPalindrome = exports.factorial = exports.isSet = exports.isPrime = void 0;
function isPrime(N) {
    for (var i = 2, s = Math.sqrt(N); i <= s; i++)
        if (N % i === 0)
            return false;
    return N > 1;
}
exports.isPrime = isPrime;
function isSet(A, B, C) {
    var sum = (A * A) + (B * B);
    return (C * C) === sum;
}
exports.isSet = isSet;
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
function convertStringToArray(input) {
    var output = [];
    var stringArray = input.split('');
    for (var _i = 0, stringArray_1 = stringArray; _i < stringArray_1.length; _i++) {
        var item = stringArray_1[_i];
        output.push(parseInt(item));
    }
    console.log(output);
    return output;
}
exports.convertStringToArray = convertStringToArray;
function isEven(N) {
    return N % 2 == 0;
}
exports.isEven = isEven;
function LargestInArray(input) {
    var max = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var item = input_1[_i];
        if (item > max) {
            max = item;
        }
    }
    console.log(max);
    return max;
}
exports.LargestInArray = LargestInArray;
function triangular(N) {
    if (N == 1) {
        return 1;
    }
    else {
        return N + triangular(N - 1);
    }
}
exports.triangular = triangular;
function swap(inputArray, index1, index2) {
    var temp = inputArray[index2];
    inputArray[index2] = inputArray[index1];
    inputArray[index1] = temp;
    return inputArray;
}
exports.swap = swap;
function insertElementAt(inputArray, index, element) {
    if (index === void 0) { index = 1; }
    inputArray[index] = element;
    return inputArray;
}
exports.insertElementAt = insertElementAt;
function ArrayIsSorted(inputArray) {
    for (var i = inputArray.length - 1; i > 0; i--) {
        if (i !== 0) {
            if (inputArray[i] < inputArray[i - 1]) {
                return false;
            }
        }
    }
    return true;
}
exports.ArrayIsSorted = ArrayIsSorted;
