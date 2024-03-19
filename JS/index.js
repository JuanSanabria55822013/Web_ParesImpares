let numeros = []
for(let i = 1; i<200;i++){
    numeros.push(i)
}

function mostrarNumeros() {
    const selector = document.getElementById('selector').value
    const numero = document.getElementById('numero').value
    const listaNumeros = document.getElementById('listaNumeros')
    listaNumeros.innerHTML = ''

 if(selector === 'parMay' || selector === 'imparMay'){
    if (numero < 1 || numero > 199) {
        alert("Por favor, introduce un número entre 1 y 199.")
        return
    }
 }


  switch(selector){
    case 'par':
      listaNumeros.innerHTML = numeros.filter(num => num % 2 === 0).sort((a, b) => b - a).map(num => '<li>' + num + '</li>').join('')
      break
    case 'impar':
      listaNumeros.innerHTML = numeros.filter(num => num % 2 !== 0).sort((a, b) => b - a).map(num => '<li>' + num + '</li>').join('')
      break
    case 'parMay':
      listaNumeros.innerHTML = numeros.filter(num => num % 2 === 0 && num > numero).sort((a, b) => b - a).map(num => '<li>' + num + '</li>').join('')
      break
    case 'imparMay':
      listaNumeros.innerHTML = numeros.filter(num => num % 2 !== 0 && num > numero).sort((a, b) => b - a).map(num => '<li>' + num + '</li>').join('')
      break
  }
}
  document.getElementById('selector').addEventListener('change', function() {
    const selector = document.getElementById('selector').value
    const numeroInput = document.getElementById('numero')
    if (selector === 'parMay' || selector === 'imparMay') {
        numeroInput.classList.remove("inputNormal")
        numeroInput.classList.add("inputMayor")
    } else {
        numeroInput.classList.remove("inputMayor")
        numeroInput.classList.add("inputNormal")
    }
  });
  
  document.getElementById('verNum').addEventListener('click', mostrarNumeros)