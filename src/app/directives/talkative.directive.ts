import { Directive, ElementRef, HostListener } from '@angular/core';
import { MessageService } from '../services/message.service';

@Directive({
  selector: '[appTalkative]'
})
export class TalkativeDirective {

  constructor(private el: ElementRef, private messageService: MessageService) { }

  @HostListener('click') onClick() {
    const message = this.messageService.getRandomMessage();
    alert(message);
  }
}
