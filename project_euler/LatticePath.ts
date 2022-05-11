export function solution(n:number) {
    for (var i = 1, c = 1; i <= n; i++)
        c = c * (n + i) / i;
    return c;
}
