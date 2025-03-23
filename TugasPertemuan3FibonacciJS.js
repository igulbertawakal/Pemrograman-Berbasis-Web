const fibonacci = (n) => {
    let fibo = [0, 1];
    for (let i = 2; i < n; i++) {
        fibo.push(fibo[i - 1] + fibo[i - 2]);
    }
    return fibo;
};

function hitungFibonacci() {
    let n = document.getElementById("jumlah").value;
    let hasil = fibonacci(parseInt(n));
    document.getElementById("hasil").innerText = "Deret Fibonacci: " + hasil.join(", ");
}
