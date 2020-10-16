import { Router } from "express";
import OrphanagesController from './contollers/OrphanagesController';
const routes = Router();


routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", OrphanagesController.create);

export default routes;