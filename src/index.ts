import type { Tarefa } from "./Tarefa.js";
import { Prioridade } from "./Prioridade.js";


function criarTarefa(titulo: string, descricao: string, prioridade: Prioridade): Tarefa {
    return {
        titulo,
        descricao,
        concluida: false,
        prioridade
    };
}

function exibirTarefa(tarefa: Tarefa): void {
    console.log(`Título: ${tarefa.titulo}`);
    console.log(`Descrição: ${tarefa.descricao}`);
    console.log(`Concluída: ${tarefa.concluida ? "Sim" : "Não"}`);
    console.log(`Prioridade: ${tarefa.prioridade}`);
}

function concluirTarefa(tarefa: Tarefa): void {
    tarefa.concluida = true;
}

const minhaTarefa = criarTarefa("Estudar TypeScript", "Ler a documentação oficial e fazer exercícios", Prioridade.alta);
exibirTarefa(minhaTarefa);
concluirTarefa(minhaTarefa);
exibirTarefa(minhaTarefa);