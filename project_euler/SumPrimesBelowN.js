"use strict";
exports.__esModule = true;
exports.solution = void 0;
var Utils_1 = require("../utils/Utils");
function solution(N) {
    var output = 0;
    for (var i = 1; i < N; i++) {
        if ((0, Utils_1.isPrime)(i)) {
            output += i;
        }
    }
    return output;
}
exports.solution = solution;
