"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Prioridade;
(function (Prioridade) {
    Prioridade["baixa"] = "Baixa";
    Prioridade["media"] = "M\u00E9dia";
    Prioridade["alta"] = "Alta";
})(Prioridade || (Prioridade = {}));
function criarTarefa(titulo, descricao, prioridade) {
    return {
        titulo,
        descricao,
        concluida: false,
        prioridade
    };
}
function exibirTarefa(tarefa) {
    console.log(`Título: ${tarefa.titulo}`);
    console.log(`Descrição: ${tarefa.descricao}`);
    console.log(`Concluída: ${tarefa.concluida ? "Sim" : "Não"}`);
    console.log(`Prioridade: ${tarefa.prioridade}`);
}
function concluirTarefa(tarefa) {
    tarefa.concluida = true;
}
const minhaTarefa = criarTarefa("Estudar TypeScript", "Ler a documentação oficial e fazer exercícios", Prioridade.alta);
exibirTarefa(minhaTarefa);
concluirTarefa(minhaTarefa);
exibirTarefa(minhaTarefa);
//# sourceMappingURL=index.js.map