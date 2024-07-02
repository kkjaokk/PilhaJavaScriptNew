let minhaFila = new FilaCircular(5);


function addFila(){

    const  txtElemento = document.getElementById("txtnovoElemento");
    
    if(minhaFila.enqueue(txtElemento.value)===true){

        alert("Inserido com sucesso");
        console.log(minhaFila.toString());
        mostrarFila();

    }else{

        alert("Vagas Esgotadas");

    }
}

function removerFila(){

    if(!minhaFila.isEmpty()){

        let removido = minhaFila.dequeue();
        alert("Elemento removido: "+removido);
        console.log(minhaFila.toString());


    }
    else{

        alert("Fila Vazia");

    }

}

function mostrarFila(){

    const listaFila = document.getElementById("listFila");
    listaFila.textContent = minhaFila.toString();


}

