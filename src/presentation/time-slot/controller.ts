import { Request, Response } from "express";
import { CreateTimeSlotDto, CustomError, UpdateTimeSlotDto } from "../../domain";
import { TimeSlotService } from "../services/time-slot.service";

export class TimeSlotController {

    constructor(
        public readonly timeSlotService: TimeSlotService,
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message});

        }
        return res.status(500).json({error: 'Internal server error'});
    }

    createTimeSlot = (req: Request, res: Response) => {
        const [error, createTimeSlotDto] = CreateTimeSlotDto.create(req.body);
        if(error) return res.status(400).json({error});

        this.timeSlotService.createTimeSlot(createTimeSlotDto!)
         .then((timeSlot) => res.json(timeSlot))
         .catch(error => this.handleError(error, res));
    }

    getTimeSlots = (req: Request, res: Response) => {
        this.timeSlotService.getTimeSlots()
         .then(timeSlots => res.json(timeSlots))
         .catch(error => this.handleError(error, res));
    }

    getTimeSlotById = (req: Request, res: Response) => {
        this.timeSlotService.getTimeSlotById(+req.params.id)
         .then(timeSlot => res.json(timeSlot))
         .catch(error => this.handleError(error, res));
    }

    updateTimeSlot = (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTimeSlotDto] = UpdateTimeSlotDto.update({...req.body, id});
        if(error) return res.status(400).json({error});

        this.timeSlotService.updateTimeSlot(id, updateTimeSlotDto!)
         .then(timeSlot => res.json(timeSlot))
         .catch(error => this.handleError(error, res));
    }

    deleteTimeSlot = (req: Request, res: Response) => {
        const id = +req.params.id;

        this.timeSlotService.deleteTimeSlot(id)
         .then(timeSlot => res.json(timeSlot))
         .catch(error => this.handleError(error, res));
    }
    
}