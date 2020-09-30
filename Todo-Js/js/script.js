//Criar função criarTarefa dar um alerta ('tarefa criada')
let btnAddTarefa = document.querySelector('#adicionar-tarefa');
let inputTarefa = document.querySelector('#tarefa-digitada')
let divTarefas = document.querySelector('#tarefas')

/*apos adicionar uma tarefa o input deve ficar vazio
se o usuario tentar adicionar tarefa em branco dar um alerta
e nao pode deixar criar a tarefa vazia*/

function addAcaoDeFinalizarTarefa() {
  let listaDeBotoes = document.querySelectorAll('.botao-tarefa')

  for (let i = 0; i < listaDeBotoes.length; i++) {
    let botao = listaDeBotoes[i];

    botao.addEventListener('click', function () {
      if (window.confirm("Tem certeza que quer deletar?")) {
        botao.parentElement.parentElement.remove()//pega o avo do botao toda estrutura e remove
      }
    })
  }
}

addAcaoDeFinalizarTarefa()

function criarTarefa() {
  if (inputTarefa.value.trim() === "") { //trim nao deixa com espacos
    // inputTarefa.style.border = "2px solid red" borda fica vermelha quando ocorrer o erro
    return alert("tarefa em branco, favor revisar")
  }
  let tarefa = `
  <div class="col-md-4 mb-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${inputTarefa.value}
         </div>
            <div class="botao-tarefa">
              <img src="img/check.png" width="32" alt="Botão para finalizar tarefa"
             title="Botão para finalizar tarefa">
             </div>
          </div>
      </div>
  `
  divTarefas.innerHTML += tarefa
  inputTarefa.value = ""; //limpa o imput
  addAcaoDeFinalizarTarefa();
  // alert("Tarefa Criada: " + inputTarefa.value)
}

btnAddTarefa.addEventListener('click', criarTarefa)
inputTarefa.addEventListener('keypress', function (event) {
  //console.log(event)
  if (event.key == "Enter") {
    criarTarefa()
  }
})

