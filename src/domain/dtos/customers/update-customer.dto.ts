import { regularExps } from "../../../config/regular-exps";



export class UpdateCustomerDto {

    private constructor(
        public readonly id: number,
        public readonly name?: string,
        public readonly phone?: string,
        public readonly address?: string,
        public readonly email?: string,
    ) {}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if(this.name) returnObj.name = this.name;
        if(this.phone) returnObj.phone = this.phone;
        if(this.address) returnObj.address = this.address;
        if(this.email) returnObj.email = this.email;
        
        return returnObj;
    }

    static update(props: {[key:string]: any}): [string?, UpdateCustomerDto?] {

        const {id, name, phone, address, email} = props;

        if(!id || isNaN(id)) return ['Id must be a valid number'];

        if(name === '') return ['Name could not be empty'];
                
        if(phone === '') return ['Phone could not be empty'];	
        if(phone !== undefined && !regularExps.phone.test(phone)) return ['Invalid phone'];
                
        if(address === '') return ['Address could not be empty'];
                
        if(email === '') return ['Email could not be empty'];
        if(email !== undefined && !regularExps.email.test(email)) return ['Invalid email']; 

        return [undefined, new UpdateCustomerDto(id, name, phone, address, email)];
    }
    
}