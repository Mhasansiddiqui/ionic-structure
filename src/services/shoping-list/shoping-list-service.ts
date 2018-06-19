import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Item } from "../../models/item/item.model";



@Injectable()
export class ShoppingListService {

    private shoppingLIstRef = this.db.list<any>('shopping-list');
    constructor(private db: AngularFireDatabase) {


    }

    getShoppingList() {
        return this.shoppingLIstRef;
    }
    addItem(item: Item) {
        return this.shoppingLIstRef.push(item
        );
    }
    editItem(item) {
        return this.shoppingLIstRef.update(item.key, item)
    }
    removeItem(item: Item) {
        return this.shoppingLIstRef.remove(item.key)
    }

}