import { Publisher, Subjects, TicketUpdatedEvent } from '@kltechtickets/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated
}
