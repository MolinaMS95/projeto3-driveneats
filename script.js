function selecionar(item){
    const secao = item.parentNode;
    for (let i = 0; i <secao.children.length; i++){
        if(secao.children[i].classList.contains('selecionado')){
            secao.children[i].classList.remove('selecionado');
            secao.children[i].lastElementChild.classList.add('escondido');
        }
    }
    item.classList.add('selecionado');
    item.lastElementChild.classList.remove('escondido');
}