export class ContactService{

    private contacts: {nombre:string,numero:string} []=[{"nombre":"Andres","numero":"666166669"}];

    addContact(value: {nombre:string,numero:string}){
        this.contacts.push(value);
        console.log('**nav params:', value);
    }

    getContacts(){
        
        return this.contacts.slice();
    }
}