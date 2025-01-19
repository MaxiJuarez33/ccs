import { regularExps } from "../../../config/regular-exps";



export class UpdateWashTypeDto {

    constructor(
        public readonly id: number,
        public readonly name?: string,
        public readonly description?: string,
        public readonly price?: string,
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if(this.name) returnObj.name = this.name;
        if(this.description) returnObj.description = this.description;
        if(this.price) returnObj.price = this.price;
        
        return returnObj;
    }

    static update(props: {[key:string]: any}): [string?, UpdateWashTypeDto?] {
        const {id, name, description, price} = props;

        if(!id || isNaN(id)) return ['Id must be a valid number'];
        
        if(name === '') return ['Name could not be empty'];

        if(description === '') return ['Description could not be empty'];

        if(price === '') return ['Price could not be empty'];
        if(price !== undefined && !regularExps.currecy.test(price)) return ['Price is invalid'];

        return [undefined, new UpdateWashTypeDto(id, name, description, price)];
    }    
}