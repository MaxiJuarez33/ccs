import { regularExps } from "../../../config/regular-exps";


export class CreateTimeSlotDto {

    private constructor(
        public start: string,
        public end?: string,
        public isAvailable?: boolean,
    ){}

    static create(object: {[key:string]: any}): [string?, CreateTimeSlotDto?] {
        const {start, end} = object;
        let {isAvailable} = object;
        
        if(start === undefined) return ['Start is required'];
        if(start === '') return ['Start could not be empty'];
        if(!regularExps.time.test(start)) return ['Start is invalid'];

        if(end === '') return ['End could not be empty'];
        if(end !== undefined && !regularExps.time.test(end)) return ['End is invalid'];

        if(isAvailable === '') return ['Is available could not be empty'];
        if (isAvailable !== undefined) {
            if (isAvailable === 'true') {
                isAvailable = true;
            } else if (isAvailable === 'false') {
                isAvailable = false;
            } else {
                return ['Is available is invalid'];
            }
        }
        // if(isAvailable !== undefined && typeof isAvailable !== 'boolean') return ['Is available is not a boolean']; // ToDo - implementar solo en caso de que se mande la info en formato json
        
        return [undefined, new CreateTimeSlotDto(start, end, isAvailable)];
    }   
    
}