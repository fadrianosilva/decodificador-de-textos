let entrada = document.getElementById("textoEntrada");
let saida = document.getElementById("textoSaida");

function codificarTexto() {
    saida.innerText = codificar(entrada.value);
    document.getElementById("msgNotFound").style.display = "none";
    document.getElementById("btnCopiaTexto").style.display = "block";
}

function decodificarTexto(texto) {
    saida.innerHTML = `<p>${decodificar(entrada.value)}</p>`;
    document.getElementById("msgNotFound").style.display = "none";
    document.getElementById("btnCopiaTexto").style.display = "block";
}

function codificar(texto) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){

        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }

    }
    return texto;
}

function decodificar(texto) {
    let matrizCodigo = [["ufat", "u"], ["ober", "o"], ["imes", "i"], ["enter", "e"], ["ai", "a"]];
    texto = texto.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){

        if(texto.includes(matrizCodigo[i][0])){
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return texto;
}

function copiarTexto() {
    console.log(saida.textContent);
    navigator.clipboard.writeText(saida.textContent);
}