import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {NuevoContactoPage, VerContactoPage} from '../pages'
import { ContactService } from '../../services/contacts.service';

/**
 * Generated class for the LibretaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta',
  templateUrl: 'libreta.html',
})
export class LibretaPage {

  contacts: {nombre:string,numero:string} []=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService) {
  }

  ionViewWillEnter(){

   this.contacts=this.ContactService.getContacts();
    
  }

  onLoadNewPage() {
    // Reset the content nav to have just this page
    this.navCtrl.push(NuevoContactoPage);
  }

  onItemTapped($event, contact){
    this.navCtrl.push(VerContactoPage, contact);
   

  }

}
