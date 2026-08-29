function calcular() {
    let raio = document.getElementById("inputRaio").value;
    
    let area = Math.PI * (raio * raio);

    document.getElementById("resultado").innerText = "Área: " + area.toFixed(2);
}