import { Request, Response } from "express";
import { WashTypesService } from "../services/wash-types.service";
import { CreateWashTypesDto, CustomError, UpdateWashTypeDto } from "../../domain";

export class WashTypesController {

    constructor(
        public readonly washTypesService: WashTypesService,
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message});

        }
        return res.status(500).json({error: 'Internal server error'});
    }

    createWashType = (req: Request, res: Response) => {
        const [error, createWashTypeDto] = CreateWashTypesDto.create(req.body);
        if(error) return res.status(400).json({error});

        this.washTypesService.createWashType(createWashTypeDto!)
         .then((washType) => res.json(washType))
         .catch(error => this.handleError(error, res));
    }
    
    getWashTypes = (req: Request, res: Response) => {
        this.washTypesService.getWashTypes()
         .then(washTypes => res.json(washTypes))
         .catch(error => this.handleError(error, res));
    }

    getWashTypeById = (req: Request, res: Response) => {
        this.washTypesService.getWashTypeById(+req.params.id)
         .then(washType => res.json(washType))
         .catch(error => this.handleError(error, res));
    }

    updateWashType = (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateWashTypeDto] = UpdateWashTypeDto.update({...req.body, id});
        if(error) return res.status(400).json({error});

        this.washTypesService.updateWashType(id, updateWashTypeDto!)
         .then(washType => res.json(washType))
         .catch(error => this.handleError(error, res));
    }

    deleteWashType = (req: Request, res: Response) => {
        const id = +req.params.id;

        this.washTypesService.deleteWashType(id)
         .then(washType => res.json(washType))
         .catch(error => this.handleError(error, res));
    }
}