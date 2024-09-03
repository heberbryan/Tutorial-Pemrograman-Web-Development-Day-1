function calculate() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const operation = document.getElementById('operation').value;
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Masukkan angka yang valid!';
    } else {
        switch (operation) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                if (num2 === 0) {
                    result = 'Pembagian dengan nol tidak diperbolehkan!';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Operasi tidak valid';
        }
    }

    document.getElementById('result').innerText = result;
}
