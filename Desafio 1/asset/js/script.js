
const imagen = document.getElementById("imagen");


function toggleBorde() {
    
    const tieneBorde = imagen.classList.contains("img-con-borde");
    
    
    if (tieneBorde) {
        imagen.classList.remove("img-con-borde");
    } else {
        imagen.classList.add("img-con-borde");
    }
}


imagen.addEventListener("click", toggleBorde);
