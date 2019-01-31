import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users : Object;
  
  constructor(private route: ActivatedRoute, http: HttpClient){
    http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(response => {
      this.users = response;
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe();
    let page = this.route.snapshot.queryParamMap.get('page');
    let order = this.route.snapshot.queryParamMap.get('order');
    console.log(page, order)

  }
}
