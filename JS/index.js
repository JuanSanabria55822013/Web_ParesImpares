function mostrarNumeros() {
    const selector = document.getElementById('selector').value;
    const numero = document.getElementById('numero').value;
    const listaNumeros = document.getElementById('listaNumeros');
    listaNumeros.innerHTML = '';

 if(selector === 'parMay' || selector === 'imparMay'){
    if (numero < 1 || numero > 199) {
        alert("Por favor, introduce un número entre 1 y 199.");
        return;
    }
 }

    for (let i = 200; i >= 1; i--) {
      if (selector === 'selector') {
        listaNumeros.innerHTML += '<li>' + i + '</li>';
      } else if (selector === 'par' && i % 2 === 0) {
        listaNumeros.innerHTML += '<li>' + i + '</li>';
      } else if (selector === 'impar' && i % 2 !== 0) {
        listaNumeros.innerHTML += '<li>' + i + '</li>';
      } else if (selector === 'parMay' && i % 2 === 0 && i > numero) {
        listaNumeros.innerHTML += '<li>' + i + '</li>';
      } else if (selector === 'imparMay' && i % 2 !== 0 && i > numero) {
        listaNumeros.innerHTML += '<li>' + i + '</li>';
      }
    }
  }
  
  document.getElementById('selector').addEventListener('change', function() {
    const selector = document.getElementById('selector').value;
    const numeroInput = document.getElementById('numero');
    if (selector === 'parMay' || selector === 'imparMay') {
        numeroInput.classList.remove("inputNormal")
        numeroInput.classList.add("inputMayor")
    } else {
        numeroInput.classList.remove("inputMayor")
        numeroInput.classList.add("inputNormal")
    }
  });
  
  document.getElementById('verNum').addEventListener('click', mostrarNumeros);