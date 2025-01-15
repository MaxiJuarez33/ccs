import { Router } from "express";
import { CustomersController } from "./controller";
import { CustomerService } from "../services/customer.service";


export class CustomerRouters {

    static get routes(): Router {
        
        const router = Router();
        const customerService = new CustomerService();

        const controller = new CustomersController(customerService);

        router.post('/customers', controller.createCustomer);
        
        return router;
    }
    
}