function mostrarNumeros() {
    const selector = document.getElementById('selector').value
    const numero = document.getElementById('numero').value
    const listaNumeros = document.getElementById('listaNumeros')
    listaNumeros.innerHTML = ''
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
    })