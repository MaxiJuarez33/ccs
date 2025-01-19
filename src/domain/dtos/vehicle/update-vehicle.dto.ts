


export class UpdateVehicleDto {

    constructor(
        public readonly type?: string,
        public readonly customerId: number,
        public readonly description?: string,
    ){}

    static create(object: {[key:string]: any}): [string?, UpdateVehicleDto?] {
        const {type, description, customerId} = object;

        if(type === '') return ['Type could not be empty'];

        if(customerId === undefined) return ['Customer Id is required'];
        if(customerId === '') return ['Customer Id could not be empty'];
        if(isNaN(customerId)) return ['Customer Id must be a number'];

        if(description === '') return ['Description could not be empty'];


        return [undefined, new UpdateVehicleDto(type, description, customerId)];
    }
    
}