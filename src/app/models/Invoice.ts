import { Client } from "./Client";
import { Company } from "./Company";
import { Item } from "./Item";

export class Invoice {

    id!:number;
    name!: string;
    client!: Client
    company!: Company;
    items!: Item[];
    
}