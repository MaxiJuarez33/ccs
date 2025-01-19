import { regularExps } from "../../../config/regular-exps";



export class CreateWashTypesDto {

    constructor(
        public name: string,
        public description: string,
        public price: string,
    ){}

    static create(object: {[key:string]: any}): [string?, CreateWashTypesDto?] {
        const {name, description, price} = object;

        if(name === undefined) return ['Name is required'];
        if(name === '') return ['Name could not be empty'];

        if(description === undefined) return ['Description is required'];
        if(description === '') return ['Description could not be empty'];

        if(price === undefined) return ['Price is required'];
        if(price === '') return ['Price could not be empty'];
        if(!regularExps.currecy.test(price)) return ['Price is invalid'];

        return [undefined, new CreateWashTypesDto(name, description, price)];
    }    
}