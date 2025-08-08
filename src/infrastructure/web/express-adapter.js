import express from 'express';

export function createExpressServer({ createCharge, listPayments, markAsPaid }) {
    const app = express();

    app.use(express.json());

    app.post('/payments', async (req, res) => {
        try {
            const payment = await createCharge.execute(req.body);

            res.status(201).json(payment);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    });

    app.get('/payments', async (req, res) => {
        const payments = await listPayments.execute();

        res.json(payments);
    });

    app.patch('/payments/:id/pay', async (req, res) => {
        try {
            const payment = await markAsPaid.execute(req.params.id);

            res.json(payment);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    });

    return app;
}
