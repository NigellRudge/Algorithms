"use strict";
exports.__esModule = true;
exports.solution = void 0;
var Utils_1 = require("../utils/Utils");
function solution(input) {
    var maxValue = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var numberArray = input_1[_i];
        maxValue += (0, Utils_1.LargestInArray)(numberArray);
    }
    return maxValue;
}
exports.solution = solution;
