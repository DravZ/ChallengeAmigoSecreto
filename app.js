// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar 
// la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo == ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    for(let i = 0; i < amigos.length; i++){
        if(amigos[i] == nombreAmigo){
            alert("Este amigo ya está en la lista.");
            return;
        }
    }
    amigos.push(nombreAmigo);
    document.getElementById('amigo').value = "";
    updateAmigos();
}
function updateAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        lista.innerHTML += `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo(){
    if(amigos.length == 0){
        alert("No hay amigos en la lista.");
        return;
    }
    let indiceRandom = Math.floor((Math.random() * amigos.length));
    let resultado = document.getElementById('resultado');

    let subRes = document.getElementById('sub-res');
    subRes.style.display = 'block';
    resultado.innerHTML = `<li>${amigos[indiceRandom]}</li>`;
    amigos.splice(indiceRandom, 1);
    updateAmigos();
}