## Payment Service – Hexagonal Architecture with Node.js & Prisma

### Description

The Payment Service is a study-oriented project built to demonstrate Hexagonal Architecture (Ports & Adapters) in a Node.js environment, integrating with Prisma ORM and using Express as the web adapter.

The service manages charges and payments, allowing you to create charges, list all payments, and mark them as paid.
It follows the Domain-Driven Design principles and keeps the business logic fully decoupled from external frameworks and databases.

### Features

- Create a Payment Charge – Register a new charge with title and amount.
- List All Payments – Retrieve all created payments (paid or unpaid).
- Mark Payment as Paid – Update a specific payment's status to paid.
- Hexagonal Architecture Structure – Clean separation between Domain, Application, and Infrastructure layers.
- ORM Integration – Uses Prisma ORM with SQLite for database management.

### How to Run

1.
```bash
Rename .env-example to .env
```

2.
```bash
npm i
```

3.
```bash
npx prisma migrate dev --name init
```

4.
```bash
npm run dev
```

### API Routes
```bash
POST /payments
Body:
    {
        "title": "Service Invoice #123",
        "amount": 150.75
    }
```
```bash
GET /payments
```
```bash
PATCH /payments/:id/pay
```