
const cantidadInputs = document.querySelectorAll(".cantidad-input");
const resultadoParrafo = document.getElementById("resultado");


cantidadInputs.forEach(input => {
    input.addEventListener("change", calcularCantidadTotal);
});


function calcularCantidadTotal() {
    let cantidadTotal = 0;

    cantidadInputs.forEach(input => {
        const cantidad = parseInt(input.value) || 0;

        if (cantidad < 0) {
            input.value = 0; 
        }

        cantidadTotal += cantidad;
    });

    if (cantidadTotal <= 10) {
        resultadoParrafo.textContent = `Llevas ${cantidadTotal} stickers`;
        resultadoParrafo.style.color = "green";
    } else {
        resultadoParrafo.textContent = "Llevas demasiados stickers";
        resultadoParrafo.style.color = "red";
    }
}


calcularCantidadTotal();

