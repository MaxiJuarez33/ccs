import { PrismaClient } from "@prisma/client";
import { CreateTimeSlotDto, UpdateTimeSlotDto } from "../../domain";

const prisma = new PrismaClient();

export class TimeSlotService {

    constructor(){}

    public async createTimeSlot(createTimeSlotDto: CreateTimeSlotDto){
        const {start, end, isAvailable} = createTimeSlotDto;

        const timeSlot = await prisma.timeSlot.create({
            data: {
                startTime: start,
                endTime: end,
                isAvailable,
            }
        });

        return timeSlot;
    }

    public async getTimeSlots(){
        const timeSlots = await prisma.timeSlot.findMany();
        return timeSlots;
    }

    public async getTimeSlotById(id: number){
        const timeSlot = await prisma.timeSlot.findUnique({
            where: {id}
        });
        return timeSlot;
    }

    public async updateTimeSlot(id: number, updateTimeSlotDto: UpdateTimeSlotDto){
        const {start, end, isAvailable} = updateTimeSlotDto;

        const timeSlot = await prisma.timeSlot.update({
            where: {id},
            data: {
                startTime: start,
                endTime: end,
                isAvailable,
            }
        });

        return timeSlot;
    }

    public async deleteTimeSlot(id: number){
        const timeSlot = await prisma.timeSlot.delete({
            where: {id},
        });

        return timeSlot;        
    } 
    
}