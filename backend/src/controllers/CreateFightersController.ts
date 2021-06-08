import { Request, request, Response, response, Router } from "express";
import CreatedFightersService from "../services/CreatedFightersServices";

class CreatedFightersController{

   async created(request:Request, response:Response){
        try {
        const {name,idade,peso,altura,vitorias,derrotas,empates} = request.body;
        const createdFightersService = new CreatedFightersService();
        const fighters = await createdFightersService.CreatedFighters({
            name,
            altura,
            derrotas,
            empates,
            idade,
            peso,
            vitorias
        })
        return response.status(200).json(fighters)
        } catch (error) {
            return response.status(500).send({message: error})
        }
}
}

export default CreatedFightersController