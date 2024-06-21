import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './spinning-wheel.component.html',
  styleUrls: ['./spinning-wheel.component.css']
})
export class SpinningWheelComponent {
  result: string = '';

  constructor(private messageService: MessageService) {}

  spin() {
    this.result = this.messageService.spinWheel();
    if (this.result === 'Try Again') {
      setTimeout(() => this.spin(), 2000); // Give an extra spin after 2 seconds
    }
  }
}
