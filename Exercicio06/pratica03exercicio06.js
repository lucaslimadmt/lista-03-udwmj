function calcular() {
    let C = parseFloat(document.getElementById("capital").value);
    let taxaEntrada = parseFloat(document.getElementById("taxa").value);
    let t = parseFloat(document.getElementById("tempo").value);

    let i = taxaEntrada / 100;

    let M = C * Math.pow((1 + i), t);

    document.getElementById("resultado").innerText = "Montante (M): R$ " + M.toFixed(2);
}