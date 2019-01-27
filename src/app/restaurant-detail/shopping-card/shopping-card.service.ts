import { CardItem } from "./card-item.modal";
import { MenuItem } from "../menu-item/menu-item.model";

export class ShoppingCardSevice{
    items: CardItem[] = [];

    clear(){
        this.items = [];
    }

    total(): number{
        return this.items
        .map(item => item.value())
        .reduce((prev, value) => prev + value, 0);
    }

    addItem(item: MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        if(foundItem){
            foundItem.quantidade = foundItem.quantidade + 1;
        }else{
            this.items.push(new CardItem(item));
        }
    }

    removeItem(item: CardItem){
        this.items.splice(this.items.indexOf(item), 1);
    }
}