import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactService } from '../../services/contacts.service';



/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  

  constructor(public navCtrl: NavController, private contactService: ContactService) {

   
  }

  onAddContact(value: {nombre:string,organizacion:string,movil:string,correo:string}){

    this.contactService.addContact(value);
    this.navCtrl.pop();
  }
x
 

}
