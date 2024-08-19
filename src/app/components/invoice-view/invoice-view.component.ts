import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  standalone: true,
  imports: [],
  templateUrl: './invoice-view.component.html',
})
export class InvoiceViewComponent {

  @Input() name!: String;
  @Input() id!: number;

}
