import { Router } from "express";
import { WashTypesService } from "../services/wash-types.service";
import { WashTypesController } from "./controller";


export class WashTypesRoutes {

    static get routes(): Router {
        
        const router = Router();
        const washTypesService = new WashTypesService();

        const controller = new WashTypesController(washTypesService);

        router.post('/washtype', controller.createWashType); // Funciona

        router.get('/washtypes', controller.getWashTypes); // Funciona
        router.get('/washtype/:id', controller.getWashTypeById); // Funciona
 
        router.put('/washtype/:id', controller.updateWashType); // Funciona
        
        router.delete('/washtype/:id', controller.deleteWashType); // Funciona
        
        return router;
    }
    
}