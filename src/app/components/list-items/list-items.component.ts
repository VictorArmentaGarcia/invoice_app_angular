import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/Item';
import { RowViewComponent } from '../row-view/row-view.component';

@Component({
  selector: 'list-items',
  standalone: true,
  imports: [RowViewComponent],
  templateUrl: './list-items.component.html',
})
export class ListItemsComponent {

  @Input() items: Item[] = [];

  @Output() removeItem : EventEmitter<number> =new EventEmitter();

  deleteItem(id: number) {
    this.removeItem.emit(id);
    }

}
