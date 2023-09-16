import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@kltechtickets/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete
}
