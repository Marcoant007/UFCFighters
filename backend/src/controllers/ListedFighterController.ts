import { Request, Response } from "express";
import ListedFighersServices from "../services/ListedFightersServices";

class ListedFighersController{
    async list(request:Request,response:Response){
            const listedFighters = new ListedFighersServices();
            const fighters = await listedFighters.ListedFighers();
            return response.status(200).send(fighters)
        }
    }
export default ListedFighersController