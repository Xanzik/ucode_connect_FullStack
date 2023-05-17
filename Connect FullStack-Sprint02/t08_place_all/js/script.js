function sortEvenOdd(arr) {
    function compare(a, b) {
    return a % 2 - b % 2 || a - b;
}
    arr.sort(compare);
}
