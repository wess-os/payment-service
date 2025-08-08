import { PrismaPaymentRepository } from './infrastructure/db/prisma-payment-repository.js';

import { CreateCharge } from './application/use-cases/create-charge.js';
import { ListPayments } from './application/use-cases/list-payments.js';
import { MarkAsPaid } from './application/use-cases/mark-as-paid.js';

import { createExpressServer } from './infrastructure/web/express-adapter.js';

const repo = new PrismaPaymentRepository();

const createCharge = new CreateCharge(repo);
const listPayments = new ListPayments(repo);
const markAsPaid = new MarkAsPaid(repo);

const app = createExpressServer({ createCharge, listPayments, markAsPaid });

app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000');
});
