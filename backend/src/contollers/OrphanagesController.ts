import {getRepository} from "typeorm";
import Orphanage from '../models/Orphanages';
import {Request, Response} from 'express';

export default {
async index(req: Request, res: Response){
    const orphanagesRepository = getRepository(Orphanage); 
    const orphanages = await orphanagesRepository.find();
    return res.json(orphanages);
},
async show(req: Request, res: Response){

    const {id} = req.params;
    const orphanagesRepository = getRepository(Orphanage); 
    const orphanage = await orphanagesRepository.findOneOrFail(id);
    return res.json(orphanage);
},

async create(req: Request, res: Response){
    const{
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = req.body;

    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = orphanagesRepository.create({    
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    });

    try{
    await orphanagesRepository.save(orphanage);
    }catch(err){
        console.log(err);
    }
    return res.status(201).json(orphanage)
}

};