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
        const botao = document.querySelector('.barraInferior button');
        botao.classList.add('ativo');
        botao.innerHTML = 'Fechar Pedido';
        botao.setAttribute('onclick', 'fecharPedido()');
    }
}

function montarPedido(){
    const texto = encodeURIComponent(`Olá, gostaria de fazer o pedido:\n- Prato: ${prato.innerHTML}\n- Bebida: ${bebida.innerHTML}\n- Sobremesa: ${sobremesa.innerHTML}\nTotal: R$ ${preco.toFixed(2)}`)
    const wpp = `https://wa.me/5512982059363?text=${texto}`;
    const link = document.querySelector('.barraInferior a');
    link.setAttribute('href', wpp)
}

function fecharPedido(){
    const prato = document.querySelector('.pratos .selecionado h4').innerHTML;
    const bebida = document.querySelector('.bebidas .selecionado h4').innerHTML;
    const sobremesa = document.querySelector('.sobremesas .selecionado h4').innerHTML;
    const precoPrato = document.querySelector('.pratos .selecionado span').innerHTML;
    const precoBebida = document.querySelector('.bebidas .selecionado span').innerHTML;
    const precoSobremesa = document.querySelector('.sobremesas .selecionado span').innerHTML;
    const preco = Number(precoPrato.replaceAll(',','.')) + Number(precoBebida.replaceAll(',','.')) + Number(precoSobremesa.replaceAll(',','.'));
    document.querySelector('.caixaConfirmacao').classList.add('display');
    document.querySelector('.prato .nome').innerHTML = prato;
    document.querySelector('.prato .preco').innerHTML = precoPrato;
    document.querySelector('.bebida .nome').innerHTML = bebida;
    document.querySelector('.bebida .preco').innerHTML = precoBebida;
    document.querySelector('.sobremesa .nome').innerHTML = sobremesa;
    document.querySelector('.sobremesa .preco').innerHTML = precoSobremesa;
    document.querySelector('.total .preco').innerHTML = preco.toFixed(2).replaceAll('.',',');
}

