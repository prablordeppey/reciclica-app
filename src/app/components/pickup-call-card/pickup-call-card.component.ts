import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

  @Input() status: string = "On hold";
  @Input() updatedAt: string = (new Date()).toDateString();
  @Input() createdAt: string = (new Date()).toDateString();
  @Input() notes: string = '';
  @Input() value: string = '';

  constructor() { }

  ngOnInit() {
    // console.log(this.notes);
  }

}
