function zero(x) {
    if (x < 10) {
        x = '0' + x;
    }
    return x;
}

// Função para atualizar o relógio a cada segundo
setInterval(function() {
    let novaHora = new Date();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();

    // Adicionando zeros à esquerda, se necessário
    minuto = zero(minuto);
    segundo = zero(segundo);

    // Exibindo a hora no formato padrão (00:00:00)
    document.getElementById('hora').textContent = hora + ':' + minuto + ':' + segundo;
}, 1000);
// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
// Obtém o valor do input com id "input-tarefa"
var novaTarefa = document.getElementById("input-tarefa").value;



// Verifica se o usuário digitou algo
if (novaTarefa.trim() !== '') {
    // Cria um novo elemento de lista (<li>) para a nova tarefa
    var novoItem = document.createElement("li");
    novoItem.textContent = novaTarefa;

    // Adiciona o novo elemento à lista de tarefas
    document.getElementById("lista-tarefas").appendChild(novoItem);
    

    // Limpa o campo de entrada
    document.getElementById("input-tarefa").value = "";
    

}
}
