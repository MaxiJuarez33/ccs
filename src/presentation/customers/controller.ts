import { Request, Response } from "express";
import { CreateCustomerDTO, CustomError } from "../../domain";
import { CustomerService } from "../services/customer.service";

export class CustomersController {

    constructor(
        private customerService: CustomerService
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message});

        }
        return res.status(500).json({error: 'Internal server error'});
    }
    
    
    
  createCustomer(req: Request, res: Response) {

    const [error, createCustomerDTO] = CreateCustomerDTO.create(req.body);
    if(error) return res.status(400).json({error});

    this.customerService.createCustomer(createCustomerDTO!)
     .then((customer) => res.json(customer))
      .catch(error => this.handleError(error, res));
  }
}