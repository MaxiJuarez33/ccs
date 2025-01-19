import { Router } from "express";
import { TimeSlotService } from "../services/time-slot.service";
import { TimeSlotController } from "./controller";


export class TimeSlotRoutes {

    static get routes(): Router {
        
        const router = Router();
        const timeSlotService = new TimeSlotService();

        const controller = new TimeSlotController(timeSlotService);

        router.post('/timeslot', controller.createTimeSlot);

        router.get('/timeslots', controller.getTimeSlots);
        router.get('/timeslot/:id', controller.getTimeSlotById);

        router.put('/timeslot/:id', controller.updateTimeSlot);
        
        router.delete('/timeslot/:id', controller.deleteTimeSlot);
        
        return router;
    }
    
}