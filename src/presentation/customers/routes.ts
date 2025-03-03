import { Router } from "express";
import { CustomersController } from "./controller";
import { CustomerService } from "../services/customer.service";


export class CustomerRouters {

    static get routes(): Router {
        
        const router = Router();
        const customerService = new CustomerService();

        const controller = new CustomersController(customerService);

        router.post('/customer', controller.createCustomer); // Funciona

        router.get('/customers', controller.getCustomers); // Funciona
        router.get('/customer/:id', controller.getCustomerById); // Funciona

        router.put('/customer/:id', controller.updateCustomer); // Funciona
        
        router.delete('/customer/:id', controller.deleteCustomer); // Funciona
        
        return router;
    }
    
}