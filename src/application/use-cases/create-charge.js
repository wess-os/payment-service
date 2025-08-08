import { Payment } from "../../domain/payment.js";

export class CreateCharge {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async execute(data) {
        const payment = new Payment(data);

        return await this.paymentRepository.create(payment);
    }
}
