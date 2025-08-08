export class Payment {
    constructor({ id, title, amount, paid = false, createdAt = new Date() }) {
        if (!title || !amount) throw new Error("Title and amount are required");

        this.id = id;
        this.title = title;
        this.amount = amount;
        this.paid = paid;
        this.createdAt = createdAt;
    }
}
