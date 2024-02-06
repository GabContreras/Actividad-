document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    const btnSuma = document.querySelector("button.btn");
    
    btnSuma.addEventListener("click", function() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        
        if (!isNaN(num1) && !isNaN(num2)) {
            const resultado = num1 + num2;
            alert("La suma es: " + resultado);
        } else {
            alert("Por favor ingresa números válidos.");
        }
    });
});