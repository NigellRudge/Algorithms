"use strict";
exports.__esModule = true;
exports.solution = void 0;
var Utils_1 = require("../utils/Utils");
function solution(N) {
    var output = 0;
    var maxNumber = 0;
    var maxCount = 1;
    for (var i = N; i > 1; i--) {
        var n = i;
        var count = 0;
        while (n > 1) {
            if ((0, Utils_1.isEven)(n)) {
                n = n / 2;
            }
            else {
                n = (3 * n) + 1;
            }
            count++;
        }
        if (count > maxCount) {
            maxCount = count;
            maxNumber = i;
        }
    }
    return [maxNumber, maxCount];
}
exports.solution = solution;
