import { Request, Response } from "express";
import UpdatedFightersService from "../services/UpdatedFightersServices";

class UpdatedFightersController {

    async updated(request:Request,response:Response){
            const {id} = request.params
            const {name,idade,altura,peso,vitorias,derrotas,empates} = request.body
            const updatedFightersServices = new UpdatedFightersService();
            const updatedFighters = await updatedFightersServices.UpdatedFighters({
                id: Number(id),
                name,
                altura,
                derrotas,
                empates,
                idade,
                peso,
                vitorias
            })
            return response.json({updatedFighters})
        }
    }

export default UpdatedFightersController