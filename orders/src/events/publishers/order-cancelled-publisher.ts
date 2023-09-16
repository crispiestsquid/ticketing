import { Publisher, OrderCancelledEvent, Subjects } from '@kltechtickets/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled
}
