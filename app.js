// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    limpiarCaja();
}

function mostrarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = ""; // Limpiar la lista antes de actualizarla

    listaAmigos.forEach((nombre) => {
        let li = document.createElement('li');
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo.");
        return;
    }

    let indice = Math.floor(Math.random() * listaAmigos.length);
    let nombreSorteado = listaAmigos[indice];

    let resultadoUl = document.getElementById('resultado');
    resultadoUl.innerHTML = ""; // Limpiar antes de mostrar nuevo resultado

    let li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${nombreSorteado}`;
    resultadoUl.appendChild(li);
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}
