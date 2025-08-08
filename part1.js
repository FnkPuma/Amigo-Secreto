let listaNombres = [];

function agregarAmigo() {
    const amigo = document.getElementById('amigo');
    const add = amigo.value.trim();
    
    if (add === "") {
        alert('Por favor inserte unn nombre.');
            return;
    }
    listaNombres.push(add);
    amigo.value= "";
    console.log(`Se agrego ${add} y la lista va ${listaNombres}`);

    actualizarListaAmigos();
}
