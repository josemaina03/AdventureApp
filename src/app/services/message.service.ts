import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [
    "Hello, adventurer!",
    "Keep going!",
    "You found a treasure!",
    "Watch out for traps!",
    "Good luck!"
  ];

  private outcomes: string[] = [
    'Prize 1', 
    'Prize 2', 
    'Try Again', 
    'Bonus!'
  ];

  constructor() { }

  getRandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * this.messages.length);
    return this.messages[randomIndex];
  }

  spinWheel(): string {
    const randomIndex = Math.floor(Math.random() * this.outcomes.length);
    return this.outcomes[randomIndex];
  }
}
