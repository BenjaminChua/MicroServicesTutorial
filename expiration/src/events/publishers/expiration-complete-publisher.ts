import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@bc_tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
