"use strict";
exports.__esModule = true;
exports.solution = void 0;
var Utils_1 = require("../utils/Utils");
function isSet(A, B, C) {
    var sum = (A * A) + (B * B);
    return (C * C) === sum;
}
function solution(N) {
    if (N === void 0) { N = 1000; }
    var output = 0;
    outerLoop: for (var A = 1; A < N; A++) {
        for (var B = (A + 1); B < N; B++) {
            var C = Math.sqrt((A * A) + (B * B));
            var total = A + B + C;
            if ((0, Utils_1.isNaturalNumber)(C)) {
                if (total === N) {
                    console.log([A, B, C]);
                    output = A * B * C;
                    break outerLoop;
                }
            }
        }
    }
    return output;
}
exports.solution = solution;
