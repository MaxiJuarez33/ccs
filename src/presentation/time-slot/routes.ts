import { Router } from "express";
import { TimeSlotService } from "../services/time-slot.service";
import { TimeSlotController } from "./controller";


export class TimeSlotRoutes {

    static get routes(): Router {
        
        const router = Router();
        const timeSlotService = new TimeSlotService();

        const controller = new TimeSlotController(timeSlotService);

        router.post('/timeslot', controller.createTimeSlot); // Funciona

        router.get('/timeslots', controller.getTimeSlots); // Funciona
        router.get('/timeslot/:id', controller.getTimeSlotById); // Funciona
 
        router.put('/timeslot/:id', controller.updateTimeSlot); // Funciona
        
        router.delete('/timeslot/:id', controller.deleteTimeSlot); // Funciona
        
        return router;
    }
    
}