export class MarkAsPaid {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async execute(id) {
        return await this.paymentRepository.markAsPaid(id);
    }
}
