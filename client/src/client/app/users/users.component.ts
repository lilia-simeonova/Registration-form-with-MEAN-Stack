import { Component } from '@angular/core';
import { Person } from '../registration/person';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// We need it because of the `map` method we use below
import { Observable } from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})
export class UsersComponent { 
  constructor(public http: Http) { }
  
  public persons: any;
  
  data() {
    this.http.get('http://localhost:3000/users')
     .map((res: Response) => res.json())
     .subscribe((res: any) => {
       this.persons = res;
     });
  }

  delete(person) {
    this.http.delete('http://localhost:3000/users/' + person._id).subscribe((res: any) => {
      this.persons.splice(this.persons.indexOf(person), 1);
    });
  }
}