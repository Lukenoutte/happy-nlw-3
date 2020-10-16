import { Router } from "express";
import OrphanagesController from './contollers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload.ts';
const routes = Router();

const upload = multer(uploadConfig);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array('images'),OrphanagesController.create);

export default routes;