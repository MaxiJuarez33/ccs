import { regularExps } from "../../../config/regular-exps";

export class CreateCustomerDTO {
    private constructor(
        public name: string,
        public phone: string,
        public address: string,
        public email?: string,
    ) {}

    static create(object: {[key:string]: any}): [string?, CreateCustomerDTO?] {
        const {name, phone, address, email} = object;
        
        if(name === undefined || phone === undefined) return ['Name and phone are required'];
        if(name === '') return ['Name is required'];
        if(phone === '') return ['Phone is required'];
        if(address === '') return ['Address is required'];
        if(!regularExps.phone.test(phone)) return ['Invalid phone'];
        // if(!regularExps.email.test(email)) return ['Invalid email']; // ToDo - Hacer esto si viene el mail
        
        
        return [undefined, new CreateCustomerDTO(name, phone, address, email)];
    }
}