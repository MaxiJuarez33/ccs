import { PrismaClient } from "@prisma/client";
import { CreateWashTypesDto, UpdateWashTypeDto } from "../../domain";

const prisma = new PrismaClient();


export class WashTypesService {

    constructor(){}
    
    public async createWashType(createWashTypeDto: CreateWashTypesDto){
        const {name, description, price} = createWashTypeDto;

        const washType = await prisma.washType.create({
            data: {
                name,
                description,
                price,
            }
        });

        return washType;

    }

    public async getWashTypes(){
        const washTypes = await prisma.washType.findMany();
        return washTypes;
    }

    public async getWashTypeById(id: number){
        const washType = await prisma.washType.findUnique({
            where: {id}
        });
        return washType;
    }

    public async updateWashType(id: number, updateWashTypeDto: UpdateWashTypeDto){
        const {name, description, price} = updateWashTypeDto;

        const washType = await prisma.washType.update({
            where: {id},
            data: {
                name,
                description,
                price,
            }
        });

        return washType;
    }

    public async deleteWashType(id: number){
        const washType = await prisma.washType.delete({
            where: {id},
        });

        return washType;        
    }
    
}