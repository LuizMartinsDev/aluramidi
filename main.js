function tocaSom(cont) {
  const elemento = document.querySelector(cont);
  if(elemento === null || elemento === undefined || elemento.localName !== 'audio'){
    console.log('Elemento não possui valor inserido, ou valor inserido não é valido')
  } else {
    return elemento.play()
  }
  
}
console.log('teste')
const listaDeTeclas = document.querySelectorAll(".tecla");

for (var i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];

  const instrumento = tecla.classList[1];

  const idSom = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idSom);
  };

  tecla.onkeydown = function (e) {
    if(e.code === 'Space' || e.code === 'Enter'){
        tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function (e) {
    if(e.code === 'Space' || e.code === 'Enter'){
        tecla.classList.remove('ativa') 
    }
    
  }
}
