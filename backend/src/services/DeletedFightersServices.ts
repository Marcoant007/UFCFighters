import { getCustomRepository } from "typeorm";
import Fighters from "../models/Fighters";
import FightersRepository from "../repository/FightersRepository";

interface Delete {
    id: number  
}

class DeletedFightersService {

    async DeletedFighters({id}:Delete){
        const fightersRepository = getCustomRepository(FightersRepository);
        const deleted = await fightersRepository.delete({
            id
        })
        return deleted
    }

}

export default DeletedFightersService