import { MenuItem } from "../menu-item/menu-item.model";

export class CardItem{
    constructor(public menuItem: MenuItem, 
        public quantidade: number = 1){

    }

    value(): number{
        return this.quantidade * this.menuItem.price;
    }
}