import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users : Object;
  
  constructor(http: HttpClient){
    http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(response => {
      this.users = response;
    });
  }
}
