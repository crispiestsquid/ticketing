import { Publisher, OrderCreatedEvent, Subjects } from '@kltechtickets/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated
}
