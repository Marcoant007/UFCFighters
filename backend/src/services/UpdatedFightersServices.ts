import { getCustomRepository } from "typeorm";
import Fighters from "../models/Fighters";
import FightersRepository from "../repository/FightersRepository";

interface Request {
    id: number
    name: string
    idade: number
    peso: number
    altura: number
    vitorias: number
    derrotas: number
    empates: number
}

class UpdatedFightersService{
    async UpdatedFighters({id,name,altura,derrotas,empates,idade,peso,vitorias}:Request):Promise<Fighters | undefined>{
        const fightersRepository = getCustomRepository(FightersRepository);
        const fighters = await fightersRepository.save({
            id,
            name,
            altura,
            derrotas,
            empates,
            idade,
            peso,
            vitorias
        })
        return fighters
    }
}

export default UpdatedFightersService