import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ShoppingListService } from '../../services/shoping-list/shoping-list-service';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../models/item/item.model';
import {map} from 'rxjs/operators/map'
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$: Observable<Item[]>;

  constructor(private shopping: ShoppingListService, public navCtrl: NavController) {
     this.shoppingList$ =   this.shopping
      .getShoppingList()
      .snapshotChanges()
      .map(
        changes => {
          return changes.map(c => ({
            key : c.payload.key,...c.payload.val()
          }))
        }
      ) 

  }
}
