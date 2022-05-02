function inverter() {
  let classes = document.querySelectorAll('li');
  for (let index = 0; index < classes.length; index++) {
    if (classes.item(index).getAttribute('class') == 'azul') {
      classes.item(index).classList.remove('azul');
      classes.item(index).classList.add('vermelho');
    } else {
      if (classes.item(index).getAttribute('class') == 'vermelho') {
        classes.item(index).classList.remove('vermelho');
        classes.item(index).classList.add('azul');
      }
    }
  }
}

function myFunction() {}
