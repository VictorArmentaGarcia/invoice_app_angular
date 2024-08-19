import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/item.InvoiceService';
import { Invoice } from '../../models/Invoice';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html'
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;
  constructor(private invoiceService: InvoiceService){
  }

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }


}
