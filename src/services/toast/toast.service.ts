import { Injectable } from "@angular/core";
import { ToastController } from "ionic-angular/components/toast/toast-controller";



@Injectable()
export class ToastService{
  constructor(private toasCtrl : ToastController){  }

  show(message : string,duration:number =3){
       return this.toasCtrl.create({
           message,
           duration
       })
       .present();
  }
}