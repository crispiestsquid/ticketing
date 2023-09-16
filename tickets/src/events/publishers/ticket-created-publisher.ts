import { Publisher, Subjects, TicketCreatedEvent } from '@kltechtickets/common'

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated
}
