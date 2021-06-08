import { EntityRepository, Repository } from "typeorm";
import Fighters from "../models/Fighters";

@EntityRepository(Fighters)
class FightersRepository extends Repository<Fighters>{
    async Fighters(name: string):Promise<Fighters | undefined>{
        const findFighters = await this.findOne({
            where: {name: name}
        })
        return findFighters;
    }
}

export default FightersRepository;