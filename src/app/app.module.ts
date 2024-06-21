import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TalkativeDirective } from './directives/talkative.directive';
import { PlaceholderPipe } from './pipes/placeholder.pipe';
import { SpinningWheelComponent } from './component/spinning-wheel/spinning-wheel.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    TalkativeDirective,
    PlaceholderPipe,
    SpinningWheelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
