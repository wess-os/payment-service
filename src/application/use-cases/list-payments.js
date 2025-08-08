export class ListPayments {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async execute() {
        return await this.paymentRepository.listAll();
    }
}
