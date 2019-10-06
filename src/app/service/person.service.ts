import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Person } from '../model/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private baseUrl = 'http://localhost:8080/persons';

  constructor(private http: HttpClient) { }


  list(): Observable<Person[]> {
    const url = `${this.baseUrl}`;

    return this.http.get(url).pipe(
      map((data: any[]) => data.map((person: any) => new Person(
        person.id,
        person.first_name,
        person.last_name,
       
      )))
    );
  }
}
