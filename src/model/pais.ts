import { Continente } from "./continente";

export interface Pais {
    id: number;
    nome: String;
    idioma: String;
    continente: Continente;
    populacao: number;
}