import { Router } from "express";
import { CustomersController } from "./controller";
import { CustomerService } from "../services/customer.service";


export class CustomerRouters {

    static get routes(): Router {
        
        const router = Router();
        const customerService = new CustomerService();

        const controller = new CustomersController(customerService);

        router.post('/customer', controller.createCustomer);

        router.get('/customers', controller.getCustomers);
        router.get('/customer/:id', controller.getCustomerById);

        router.put('/customer/:id', controller.updateCustomer);
        
        router.delete('/customer/:id', controller.deleteCustomer);
        
        return router;
    }
    
}