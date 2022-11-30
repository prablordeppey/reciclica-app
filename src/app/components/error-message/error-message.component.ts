import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {

  @Input() message: String = '';
  @Input() field: any;  // changed to FormControl type
  @Input() error!: string;

  constructor() { }

  ngOnInit() { }

  //  form.get('email')?.touched && form.get('email')?.errors && !!form.get('email')?.errors?.['required']"
  shouldShowComponent(){
    if (this.field.touched && this.field?.errors?.[this.error]){
      return true;
    }
    
    return false;
  }

}
