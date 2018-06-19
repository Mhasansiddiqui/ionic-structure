import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item/item.model';
import { ShoppingListService } from '../../services/shoping-list/shoping-list-service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EidtshoppingitempagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eidtshoppingitempage',
  templateUrl: 'eidtshoppingitempage.html',
})
export class EidtshoppingitempagePage {

  item: Item;

  constructor(private toast : ToastService, public navCtrl: NavController, public navParams: NavParams, private shoppingService: ShoppingListService) {

  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }
  saveItem(item: Item) {
    this.shoppingService.editItem(item)
      .then(() => {
        this.toast.show(`${item.name}saved!`
      )
       this.navCtrl.setRoot('HomePage')
      })
  
  }
  removeItem(item:Item){
    this.shoppingService.removeItem(item)
    .then(()=>{
       this.toast.show(`${item.name} deleted!`)
       this.navCtrl.setRoot('HomePage'); 
    })
  }

 


}
