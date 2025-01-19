


export class CreateVehicleDto {

    constructor(
        public readonly type: string,
        public readonly customerId: number,
        public readonly description?: string,
    ){}

    static create(object: {[key:string]: any}): [string?, CreateVehicleDto?] {
        const {type, description, customerId} = object;

        if(type === undefined) return ['Type is required'];
        if(type === '') return ['Type could not be empty'];

        if(customerId === undefined) return ['Customer Id is required'];
        if(customerId === '') return ['Customer Id could not be empty'];
        if(isNaN(customerId)) return ['Customer Id must be a number'];

        if(description === '') return ['Description could not be empty'];


        return [undefined, new CreateVehicleDto(type, description, customerId)];
    }
    
}