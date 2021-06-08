import { response } from "express";
import { getCustomRepository } from "typeorm"
import FightersRepository from "../repository/FightersRepository"

interface Fighters {
    name: string
    idade: number
    peso: number
    altura: number
    vitorias: number
    derrotas: number
    empates: number
}

class CreatedFightersService {
    public async CreatedFighters({name,idade,altura,derrotas,empates,peso,vitorias}:Fighters):Promise<Fighters>{
        const fightersRepository = getCustomRepository(FightersRepository);
        const createdFighters = fightersRepository.create({
            name,
            idade,
            peso,
            altura,
            derrotas,
            vitorias,
            empates
        })
        await fightersRepository.save(createdFighters)
        console.log("Ta criando no service ?", createdFighters)
        return createdFighters
    }
}

export default CreatedFightersService