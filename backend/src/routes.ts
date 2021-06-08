import { request, response, Router } from "express";
import CreatedFightersController from "./controllers/CreateFightersController";
import ListedFighersController from "./controllers/ListedFighterController";
import UpdatedFightersController from "./controllers/UpdatedFightersController";
import DeletedFightersController from "./controllers/DeletedFightersController";

const routes = Router();

const createdFightersController = new CreatedFightersController();
const listedFighersController = new ListedFighersController();
const updatedFightersController = new UpdatedFightersController();
const deletedFightersController = new DeletedFightersController();

routes.get('/', listedFighersController.list)
routes.post('/', createdFightersController.created)
routes.put('/:id', updatedFightersController.updated)
routes.delete('/:id', deletedFightersController.delete)

export default routes