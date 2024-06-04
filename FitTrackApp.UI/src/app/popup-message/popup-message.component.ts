import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-message',
  templateUrl: './popup-message.component.html',
  styleUrls: ['./popup-message.component.css']
})
export class PopupMessageComponent {
  @Input() message: string = ''; 
  @Input() type: 'success' | 'error' | string = '';
}
