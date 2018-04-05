import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Contacto } from "../models/contacto.model";

@Injectable()
export class ContactService{

    private contactsRef=this.db.list<Contacto>('AgendaFirebase');

   // private contacts: Contacto []=[{
     //       "nombre":"Andres",
       //     "organizacion":"UC3M",
         //   "movil":"666666666",
           // "correo":"andres@example.com"}];

    constructor(private db:AngularFireDatabase){

    }

    addContact(value: Contacto){
       // this.contacts.push(value);
        //console.log('**nav params:', value);
        return this.contactsRef.push(value);
    }

    updateContact(value: Contacto){

        return this.contactsRef.update(value.key,value);
    }

    removeContact(value: Contacto){
        
        return this.contactsRef.remove(value.key);
    }

    getContacts(){
        
        return this.contactsRef;
    }
}