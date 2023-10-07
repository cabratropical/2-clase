
const password1Select = document.getElementById("password1");
const password2Select = document.getElementById("password2");
const password3Select = document.getElementById("password3");
const ingresarButton = document.getElementById("ingresarButton");
const resultadoParrafo = document.getElementById("resultado");


ingresarButton.addEventListener("click", verificarPassword);


function verificarPassword() {
    const password1 = password1Select.value;
    const password2 = password2Select.value;
    const password3 = password3Select.value;
    const password = password1 + password2 + password3;
    
    if (password === "911") {
        resultadoParrafo.textContent = "password 1 correcto";
        resultadoParrafo.style.color = "green";
    } else if (password === "714") {
        resultadoParrafo.textContent = "password 2 correcto";
        resultadoParrafo.style.color = "green";
    } else {
        resultadoParrafo.textContent = "password incorrecto";
        resultadoParrafo.style.color = "red";
    }
}


window.addEventListener("load", () => {
    resultadoParrafo.textContent = "";
});
