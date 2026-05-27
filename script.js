// 1. Seleção dos elementos do DOM
const inputNome = document.getElementById('campoNome');
const botao = document.getElementById('botaoEnviar');
const resultado = document.getElementById('resultado');
// 2. Função para processar a ação
function processarClique() {
 const nomeDigitado = inputNome.value; // Captura o valor
 resultado.innerText = `Olá, ${nomeDigitado}! Bem-vindo ao JS.`;
}
botao.addEventListener('click', processarClique);