function sum3And5(N) {
    var output = 0;
    for (var i = 1; i < N; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            //console.log(`i: ${i}`)
            output += i;
        }
    }
    return output;
}
function fibonacci(N) {
    if (N <= 1)
        return 1;
    return fibonacci(N - 1) + fibonacci(N - 2);
}
function evenFibNumbers() {
    var output = 0;
    var N = 1;
    while (fibonacci(N) < 4000000) {
        if ((fibonacci(N) % 2) == 0) {
            output += fibonacci(N);
        }
        N++;
    }
    return output;
}
function isPrime(inputNumber) {
    var output = true;
    if (inputNumber == 1)
        return false;
    if (inputNumber == 2)
        return true;
    for (var i = 2; i < inputNumber; i++) {
        if (inputNumber % i == 0) {
            output = false;
        }
    }
    return output;
}
function isPalindrome(inputValue) {
    return inputValue === inputValue.split('').reverse().join('');
}
function findLargestPrimeFactor(inputValue) {
    var div = 2;
    var maxFactor;
    while (inputValue != 0) {
        if (inputValue % div != 0) {
            div = div + 1;
        }
        else {
            maxFactor = inputValue;
            inputValue = inputValue / div;
            if (inputValue == 1) {
                return maxFactor;
            }
        }
    }
}
function largestPalindrome() {
    var output = 0;
    var lowerLimit = 100;
    var upperLimit = 999;
    var product = 0;
    for (var i = lowerLimit; i <= upperLimit; i++) {
        for (var j = i; j <= upperLimit; j++) {
            product = i * j;
            if (isPalindrome(product.toString())) {
                if (product > output) {
                    output = product;
                }
            }
        }
    }
    return output;
}
function factorial(N) {
    if (N == 0 || N == 1)
        return 1;
    else {
        return N * factorial(N - 1);
    }
}
function smallestNumberDivisibleBy(N) {
    var output = 1;
    whileLoop: while (true) {
        for (var i = N; i >= 1; i--) {
            if (output % i !== 0) {
                break;
            }
            if (output % i == 0 && i == 1) {
                break whileLoop;
            }
        }
        output++;
    }
    return output;
}
console.log(smallestNumberDivisibleBy(20));
