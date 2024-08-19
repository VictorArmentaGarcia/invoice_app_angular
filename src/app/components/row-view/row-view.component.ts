import { Component, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'tr[row-view]',
  standalone: true,
  imports: [],
  templateUrl: './row-view.component.html',
})
export class RowViewComponent {

  @Input() item : Item = new Item();

}
