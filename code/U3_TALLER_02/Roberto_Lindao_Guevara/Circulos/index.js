function crear_circulos() {
    const numero = document.getElementById('numero').value;
    const circulo1 = document.getElementById('circulo1');
    circulo1.style.backgroundColor = '#ffffcc';
    const circulo2 = document.getElementById('circulo2');
    circulo2.style.backgroundColor = '#00ff80';
    const circulo3 = document.getElementById('circulo3');
    circulo3.style.backgroundColor = '#ff9933';
    const circulo4 = document.getElementById('circulo4');
    circulo4.style.backgroundColor = '#66ffff';
    const circulo5 = document.getElementById('circulo5');
    circulo5.style.backgroundColor = '#cc33ff';

    if (numero == 1) {
        circulo1.style.visibility = "visible";
        circulo1.style.display = "block";
        circulo2.style.visibility = "hidden";
        circulo2.style.display = "none";
        circulo3.style.visibility = "hidden";
        circulo3.style.display = "none";
        circulo4.style.visibility = "hidden";
        circulo4.style.display = "none";
        circulo5.style.visibility = "hidden";
        circulo5.style.display = "none";
    } else if (numero == 2) {
        circulo1.style.visibility = "visible";
        circulo1.style.display = "block";
        circulo2.style.visibility = "visible";
        circulo2.style.display = "block";
        circulo3.style.visibility = "hidden";
        circulo3.style.display = "none";
        circulo4.style.visibility = "hidden";
        circulo4.style.display = "none";
        circulo5.style.visibility = "hidden";
        circulo5.style.display = "none";
    } else if (numero == 3) {
        circulo1.style.visibility = "visible";
        circulo1.style.display = "block";
        circulo2.style.visibility = "visible";
        circulo2.style.display = "block";
        circulo3.style.visibility = "visible";
        circulo3.style.display = "block";
        circulo4.style.visibility = "hidden";
        circulo4.style.display = "none";
        circulo5.style.visibility = "hidden";
        circulo5.style.display = "none";
    } else if (numero == 4) {
        circulo1.style.visibility = "visible";
        circulo1.style.display = "block";
        circulo2.style.visibility = "visible";
        circulo2.style.display = "block";
        circulo3.style.visibility = "visible";
        circulo3.style.display = "block";
        circulo4.style.visibility = "visible";
        circulo4.style.display = "block";
        circulo5.style.visibility = "hidden";
        circulo5.style.display = "none";
    } else if (numero == 5) {
        circulo1.style.visibility = "visible";
        circulo1.style.display = "block";
        circulo2.style.visibility = "visible";
        circulo2.style.display = "block";
        circulo3.style.visibility = "visible";
        circulo3.style.display = "block";
        circulo4.style.visibility = "visible";
        circulo4.style.display = "block";
        circulo5.style.visibility = "visible";
        circulo5.style.display = "block";
    }



}