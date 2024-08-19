import { Invoice } from "../models/Invoice";

//export const invoiceData: Invoice = {
//Se le coloca el any para que no marque error al tiparlo
export const invoiceData: any = {

    id: 1,
    name: 'Componentes de PC',
    client: {
        name: 'Andres',
        lastName: 'Doe',
        address: {
            country: 'USA',
            city: 'Los Angeles',
            street: 'One Street',
            number: 15,
        }
    },
    company: {
        name: 'New Age',
        fiscalNumber: 3123123,
    },
    items: [
        {
            id: 1,
            product: 'Cpu Intel i9',
            price: 599,
            quantity: 1,
            //Como invocar una funcion en un javascritp
            //total :() => 599 * 1 
        },
        {
            id: 2,
            product: 'Corsair Teclado Mecanico',
            price: 399,
            quantity: 2

        },
        {
            id: 3,
            product: 'Monitor Asus',
            price: 899,
            quantity: 3
        },
    ]    
    
}