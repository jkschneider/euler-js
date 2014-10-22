var sum = 0;

function fibonacciSum(n, p0, p1) {
    if(p1 % 2 == 0 && p1 <= 4000000)
      sum += p1;
    return n == 1 ? p1 : fibonacciSum(n - 1, p1, p0 + p1);
}

fibonacciSum(50, 0, 1);
console.log(sum);