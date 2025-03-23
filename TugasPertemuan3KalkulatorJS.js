const calculator = (operator, ...numbers) => {
    switch (operator) {
        case '+':
            return numbers.reduce((a, b) => a + b);
        case '-':
            return numbers.reduce((a, b) => a - b);
        case '*':
            return numbers.reduce((a, b) => a * b);
        case '/':
            return numbers.reduce((a, b) => a / b);
        case '%':
            return numbers.reduce((a, b) => a % b);
        default:
            return 'Operator tidak valid';
    }
};

function hitung() {
    let angkaInput = document.getElementById("angka").value;
    let operator = document.getElementById("operator").value;
    let angkaArray = angkaInput.split(',').map(Number);
    
    let hasil = calculator(operator, ...angkaArray);
    document.getElementById("hasil").innerText = "Hasil: " + hasil;
}
