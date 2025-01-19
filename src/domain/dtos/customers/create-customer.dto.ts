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
        
        if(name === undefined) return ['Name is required'];
        if(name === '') return ['Name could not be empty'];
        
        if(phone === undefined) return ['Phone is required'];
        if(phone === '') return ['Phone could not be empty'];	
        if(!regularExps.phone.test(phone)) return ['Invalid phone'];
        
        if(address === undefined) return ['Address is required'];
        if(address === '') return ['Address could not be empty'];
        
        if(email === undefined) return [undefined, new CreateCustomerDTO(name, phone, address)];
        if(email === '') return ['Email could not be empty'];
        if(!regularExps.email.test(email)) return ['Invalid email']; 
        
        
        return [undefined, new CreateCustomerDTO(name, phone, address, email)];
    }
}