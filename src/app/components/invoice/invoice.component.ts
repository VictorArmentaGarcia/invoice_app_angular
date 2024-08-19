import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/item.InvoiceService';
import { Invoice } from '../../models/Invoice';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { TotalComponent } from '../total/total.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [ClientViewComponent, 
    CompanyViewComponent, 
    InvoiceViewComponent, 
    ListItemsComponent,
    TotalComponent],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private invoiceService: InvoiceService){
  }

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }

  deleteItem(id: number) {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
  }

}
