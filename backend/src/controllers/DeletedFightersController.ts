import { Request, Response } from "express";
import DeletedFightersService from "../services/DeletedFightersServices";

class DeletedFightersController{
    async delete(request:Request, response:Response){
        const {id} = request.params
        const deletedFightersService = new DeletedFightersService();
        const deletedFighters = await  deletedFightersService.DeletedFighters({
            id: Number(id)
        })
        return response.status(202).send({})
    }
}

export default DeletedFightersController