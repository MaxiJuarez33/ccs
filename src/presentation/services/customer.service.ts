import { PrismaClient } from "@prisma/client";
import { CreateCustomerDTO } from "../../domain";
const prisma = new PrismaClient();

export class CustomerService {

    constructor(){}
    
    
    public async createCustomer(createCustomerDTO: CreateCustomerDTO) {
        const {name, phone, address, email} = createCustomerDTO;
        const customer = await prisma.customerModel.create({
            data: {
                name, phone, address, email,
            }
        });
    
        return customer;
    }
}