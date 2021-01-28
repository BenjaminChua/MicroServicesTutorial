import { Publisher, Subjects, TicketUpdatedEvent } from '@bc_tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
