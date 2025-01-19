import { regularExps } from "../../../config/regular-exps";


export class UpdateTimeSlotDto {

    private constructor(
        public start?: string,
        public end?: string,
        public isAvailable?: boolean,
    ){}

    get values() {
        const returnObj: {[key: string]: any} = {};

        if(this.start) returnObj.start = this.start;
        if(this.end) returnObj.end = this.end;
        if(this.isAvailable) returnObj.isAvailable = this.isAvailable;
        
        return returnObj;
    }

    static update(props: {[key:string]: any}): [string?, UpdateTimeSlotDto?] {
        const {start, end} = props;
        let {isAvailable} = props;
        
        if(start === '') return ['Start could not be empty'];
        if(start !== undefined && !regularExps.time.test(start)) return ['Start is invalid'];

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
        
        return [undefined, new UpdateTimeSlotDto(start, end, isAvailable)];
    }   
    
}