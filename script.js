let marcador = 0;
function selecionar(item){
    let condicao = false;
    const secao = item.parentNode;
    for (let i = 0; i <secao.children.length; i++){
        if(secao.children[i].classList.contains('selecionado')){
            secao.children[i].classList.remove('selecionado');
            secao.children[i].lastElementChild.classList.add('escondido');
            condicao = true;
        }
    }
    if (condicao === false){
        marcador = marcador + 1;
    }
    item.classList.add('selecionado');
    item.lastElementChild.classList.remove('escondido');
    if(marcador === 3){
        const botao = document.querySelector('.barraInferior button')
        botao.classList.add('ativo');
        botao.innerHTML = 'Fechar Pedido';
    }
}