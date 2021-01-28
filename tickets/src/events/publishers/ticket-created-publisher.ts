import { Publisher, Subjects, TicketCreatedEvent } from '@bc_tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
