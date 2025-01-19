import { Request, Response } from "express";
import { CreateCustomerDTO, CustomError, UpdateCustomerDto } from "../../domain";
import { CustomerService } from "../services/customer.service";

export class CustomersController {

    constructor(
        public readonly customerService: CustomerService,
    ){}

    private handleError = (error: unknown, res: Response) => {
        if(error instanceof CustomError){
            return res.status(error.statusCode).json({error: error.message});

        }
        return res.status(500).json({error: 'Internal server error'});
    }
    
    
    
  createCustomer = (req: Request, res: Response) => {

    const [error, createCustomerDTO] = CreateCustomerDTO.create(req.body);
    if(error) return res.status(400).json({error});

    this.customerService.createCustomer(createCustomerDTO!)
     .then((customer) => res.json(customer))
      .catch(error => this.handleError(error, res));
  }

  getCustomers = (req: Request, res: Response) => {
    this.customerService.getCustomers()
      .then(customers => res.json(customers))
      .catch(error => this.handleError(error, res));
  }

  getCustomerById = (req: Request, res: Response) => {
    this.customerService.getCustomerById(+req.params.id)
     .then(customer => res.json(customer))
     .catch(error => this.handleError(error, res));
  }

  updateCustomer = (req: Request, res: Response) => {
    const id = +req.params.id;
    const [error, updateCustomerDto] = UpdateCustomerDto.update({...req.body, id});
    if(error) return res.status(400).json({error});

    this.customerService.updateCustomer(id, updateCustomerDto!)
     .then(customer => res.json(customer))
     .catch(error => this.handleError(error, res));
  }

  deleteCustomer = (req: Request, res: Response) => {
    const id = +req.params.id;

    this.customerService.deleteCustomer(id)
     .then(customer => res.json(customer))
     .catch(error => this.handleError(error, res));
  }
}