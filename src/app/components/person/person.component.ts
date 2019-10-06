import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

    person: Person[];

  constructor(private personService: PersonService) { }

  ngOnInit() {

     // subscribe

    this.personService.list().subscribe((person: Person[]) => {
      // (4) Store
      console.log(person);
      this.person = person;
    });
  }
  

}
