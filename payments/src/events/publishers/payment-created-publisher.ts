import { Publisher, Subjects, PaymentCreatedEvent } from '@bc_tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
