import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/Invoice';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  
  private invoice: Invoice = invoiceData;
  
  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    //linea return es lo mismo
    return { ...this.invoice, total: total };
    //return { ...this.invoice, total };
  }

/*   calculateTotal() {
    let total = 0;

    this.invoice.items.forEach(item =>{
      total += (item.price * item.quantity);
    });

    return total;
  }

  calculateTotal2() {
    let total = 0;

    this.invoice.items.forEach(item =>{
      total += item.total();
    });

    return total;
  }

  calculateTotal3() {
    return this.invoice.items.reduce(
      (acumulator, item) => acumulator + item.total(), 
    0);
  } */

  calculateTotal() {
    return this.invoice.items.reduce(
      (acumulator, item) => acumulator + (item.price * item.quantity), 
    0);
  }

  removeInvoice(id: number) : Invoice{
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return { ...this.invoice, total: total };
  }

  saveItem(item: Item): Invoice {
    this.invoice.items = [... this.invoice.items, item]
    const total = this.calculateTotal();
    return { ...this.invoice, total: total }; 
  }
  
}
