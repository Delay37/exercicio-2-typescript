import { Prioridade } from "./Prioridade.js";

export type Tarefa = {
    titulo: string;
    descricao: string;
    concluida: boolean;
    prioridade: Prioridade;
};