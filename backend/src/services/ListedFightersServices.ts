import { getCustomRepository } from "typeorm";
import FightersRepository from "../repository/FightersRepository";

class ListedFighersServices {
    public async ListedFighers(){
        const fightersRepository = getCustomRepository(FightersRepository)
        const fighters = await fightersRepository.find();
        console.log("lutadoreszinhos", fighters)
        return fighters
    }
}

export default ListedFighersServices