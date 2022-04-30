function minhaFuncao() {
  let titulo = document.querySelector('h1').innerHTML;
  console.log(titulo);

  let descricao = document.getElementById('descricao').innerHTML;
  console.log(descricao);

  let listaItens = document.getElementsByClassName('itens');
  console.log(listaItens[0].innerHTML);
  console.log(listaItens[1].innerHTML);
  console.log(listaItens[2].innerHTML);
  console.log(listaItens[3].innerHTML);
}
