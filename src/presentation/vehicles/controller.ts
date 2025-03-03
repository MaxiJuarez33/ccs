import { Request, Response } from "express";
import { VehicleService } from "../services/vehicle.service";
import { CreateVehicleDto, CustomError, UpdateVehicleDto } from "../../domain";

export class VehiclesController {

    constructor(
        public readonly vehicleService: VehicleService,
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message});

        }
        return res.status(500).json({error: 'Internal server error'});
    }

    createVehicle = (req: Request, res: Response) => {
        const [error, createVehicleDto] = CreateVehicleDto.create(req.body);
        if(error) return res.status(400).json({error});

        this.vehicleService.createVehicle(createVehicleDto!)
            .then(vehicle => res.status(201).json(vehicle))
            .catch(error => this.handleError(error, res));
    }
}