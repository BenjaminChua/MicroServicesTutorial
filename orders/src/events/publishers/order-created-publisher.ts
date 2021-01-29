import { Publisher, OrderCreatedEvent, Subjects } from '@bc_tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
