import { PrismaClient } from "@prisma/client";
import { CreateVehicleDto } from "../../domain";

const prisma = new PrismaClient();

export class VehicleService {

    constructor(){}

    public async createVehicle(createVehicleDto: CreateVehicleDto) {
        const {type, description} = createVehicleDto;

        const vehicle = await prisma.vehicle.create({
            data: {
                type,
                description: description || 'null',
                customer: {
                    connect: { id: createVehicleDto.customerId }
                },
            }
        })
    }
    
}