// Función para mostrar mensajes de error
function mostrarError(mensaje) {
    alert(mensaje);
}

// Función para encriptar el texto
function encriptacion() {
    const inputText = document.getElementById('input-text').value;

    // Verificamos si hay letras mayúsculas o acentos
    if (!validarTexto(inputText)) {
        mostrarError('El texto contiene letras mayúsculas o acentos, No puede ser Encriptado.');
        return;
    }

    // Reemplazamos caracteres según el patrón de encriptación
    let encriptarTexto = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    mostrarSalida(encriptarTexto, true);
}

// Función para desencriptar el texto
function desencriptacion() {
    const inputText = document.getElementById('input-text').value;

    // Verificamos si hay letras mayúsculas o acentos
    if (!validarTexto(inputText)) {
        mostrarError('El texto contiene letras mayúsculas o acentos, No puede ser Desencriptado.');
        return;
    }

    // Reemplazamos patrones encriptados por los caracteres originales
    let desencriptarTexto = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    mostrarSalida(desencriptarTexto, true);
}

// Función para mostrar el texto en el área de salida
function mostrarSalida(text, mostrarBotonCopiar) {
    const outputContent = document.getElementById('output-content');
    const outputText = document.getElementById('output-text');
    const btnCopiar = document.getElementById('btn-copiar');

    outputContent.style.display = 'none';

    outputText.style.display = 'block';
    outputText.value = text;

    // Mostramos o escondemos el botón de copiar según sea necesario
    if (mostrarBotonCopiar) {
        btnCopiar.style.display = 'block';
    } else {
        btnCopiar.style.display = 'none';
    }
}

// Función para copiar el texto
function copiarTexto() {
    const outputText = document.getElementById('output-text').value;

    navigator.clipboard.writeText(outputText)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });
}

// Función para validar el texto de entrada
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}
