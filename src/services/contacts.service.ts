export class ContactService{

    private contacts: {nombre:string,organizacion:string,movil:string,correo:string} []=[{"nombre":"Andres","organizacion":"UC3M","movil":"666666666",correo:"andres@example.com"}];

    addContact(value: {nombre:string,organizacion:string,movil:string,correo:string}){
        this.contacts.push(value);
        console.log('**nav params:', value);
    }

    updateContact(){

    }

    removeContact(){
        
    }

    getContacts(){
        
        return this.contacts.slice();
    }
}