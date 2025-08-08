import { PrismaClient } from '@prisma/client';
import { PaymentRepository } from '../../application/ports/payment-repository.js';

const prisma = new PrismaClient();

export class PrismaPaymentRepository extends PaymentRepository {
    async create(payment) {
        return await prisma.payment.create({ data: payment });
    }

    async listAll() {
        return await prisma.payment.findMany({ orderBy: { createdAt: 'desc' } });
    }

    async markAsPaid(id) {
        return await prisma.payment.update({
            where: { id },
            data: { paid: true }
        });
    }
}
