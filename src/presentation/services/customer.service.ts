import { PrismaClient } from "@prisma/client";
import { CreateCustomerDTO, UpdateCustomerDto } from "../../domain";
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

    public async getCustomers() {
        const customers = await prisma.customerModel.findMany();
        return customers;
    }

    public async getCustomerById(id: number) {
        const customer = await prisma.customerModel.findUnique({
            where: {id}
        });
        return customer;
    }

    public async updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto) {
        const {name, phone, address, email} = updateCustomerDto;
        const customer = await prisma.customerModel.update({
            where: {id},
            data: {name, phone, address, email}
        });
        return customer;
    }

    public async deleteCustomer(id: number) {
        const customer = await prisma.customerModel.delete({
            where: {id}
        });
        return customer;
    }
}