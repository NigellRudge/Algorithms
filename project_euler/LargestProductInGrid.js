"use strict";
exports.__esModule = true;
exports.solution = void 0;
function get(input, y, x) {
    if (0 <= y && y < input.length && 0 <= x && x < input[y].length) {
        return input[y][x];
    }
    return 0;
}
function solution(input, N) {
    var max = 0;
    var dx = [1, 0, 1, -1];
    var dy = [0, 1, 1, 1];
    for (var y = 0; y < input.length; y++) {
        for (var x = 0; x < input[y].length; x++) {
            for (var d = 0; d < 4; d++) {
                var p = 1;
                for (var i = 0; i < N; i++) {
                    p *= get(input, y + i * dy[d], x + i * dx[d]);
                }
                max = Math.max(p, max);
            }
        }
    }
    return max;
}
exports.solution = solution;
