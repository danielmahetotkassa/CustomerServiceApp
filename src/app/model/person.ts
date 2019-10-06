export class Person {
    id: number;
    first_name: string;
    last_name:string;

    constructor(id: number, firstname: string, lastname: string) {
        this.id = id;
        this.first_name = firstname;
        this.last_name = lastname;
    }
}
