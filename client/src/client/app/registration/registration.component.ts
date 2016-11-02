import { Component, Injectable } from '@angular/core';
import { Person } from './person';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'sd-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['registration.component.css']
})
export class RegistrationComponent { 
  constructor(public http: Http) { }

  persons = [];
  counter = 0;
  submitted = false;
  person;
  onSubmit(value) { 
    this.person = new Person(value.name, value.email, value.age);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if (value) {
      this.persons.push(this.person);
    }
    this.counter++;
    this.submitted = true;
    this.http.post('http://localhost:3000/users',
      JSON.stringify(this.person), { headers: headers })
      .subscribe(err => console.log(err));
  }
}