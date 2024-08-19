import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'tr[row-view]',
  standalone: true,
  imports: [],
  templateUrl: './row-view.component.html',
})
export class RowViewComponent {

  @Input() item : Item = new Item();
  @Output() removeItem : EventEmitter<number> =new EventEmitter();

  deleteItem(id: number): void {
    this.removeItem.emit(id);
  }

}
