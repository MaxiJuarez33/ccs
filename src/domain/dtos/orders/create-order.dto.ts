


export class CreateOrderDto {

    private constructor(
        public description: string,
        public totalAmount: number,
        public customerId: number,
    ){}
    
}