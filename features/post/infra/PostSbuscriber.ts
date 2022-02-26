import { libs } from '../../../container';

export class PostSubscriber {
  constructor(private subject: libs.Subject) {}

  get $subject() {
    return this.subject;
  }
}
