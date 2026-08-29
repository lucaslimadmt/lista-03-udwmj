function calcular() {
    let raio = document.getElementById("inputRaio").value;
    
    let volume = (4 / 3) * Math.PI * (raio * raio * raio);

    document.getElementById("resultado").innerText = "Volume: " + volume.toFixed(2);
}