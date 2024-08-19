import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {

  @Output() addEventEmitter = new EventEmitter();

  private counterId = 4;

  item: any = {
    product: '',
    price: '',
    quantity: '',
    
  }

  onSublime(): void {
    this.addEventEmitter.emit({id: this.counterId, ...this.item});
    this.counterId++;

    this.item = {
      product: '',
      price: '',
      quantity: '',
    }
  }

}
