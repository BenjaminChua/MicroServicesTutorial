import { Publisher, OrderCancelledEvent, Subjects } from '@bc_tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
