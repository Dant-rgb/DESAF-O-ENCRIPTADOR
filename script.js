function encrypt() {
    let text = document.getElementById("input-text").value;
    let encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("output-text").value = encryptedText;
}

function decrypt() {
    let text = document.getElementById("output-text").value;
    let decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById("output-text");
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand("copy");
    alert("Texto copiado: " + outputText.value);
}
