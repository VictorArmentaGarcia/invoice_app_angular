import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/Item';
import { FormsModule, NgForm } from '@angular/forms';

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

  onSublime(itemForm: NgForm): void {
    if(itemForm.valid){
      this.addEventEmitter.emit({id: this.counterId, ...this.item});
      this.counterId++;
  
      this.item = {
        product: '',
        price: '',
        quantity: '',
      }
  
      itemForm.reset();
      itemForm.resetForm();
    }
  }

}
