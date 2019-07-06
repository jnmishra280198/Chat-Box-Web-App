import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
import { FirstCharComponent } from '../shared/first-char/first-char.component';
//import { FirstCharComponent } from '../shared/first-char/first-char.component';

@NgModule({
  declarations: [ChatBoxComponent,RemoveSpecialCharPipe],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      {path: 'chat' ,component:ChatBoxComponent}
    ]),
    SharedModule
  ]
 
})
export class ChatModule { }
