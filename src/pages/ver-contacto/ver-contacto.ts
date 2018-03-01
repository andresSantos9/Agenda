import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ver-contacto',
  templateUrl: 'ver-contacto.html',
})
export class VerContactoPage {

  contact: {nombre:string,numero:string};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.contact = this.navParams.data;
    
  }

  

}
