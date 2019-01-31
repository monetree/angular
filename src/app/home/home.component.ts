import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id); //return null if not there

    // this.route.paramMap.subscribe(params => {
    //   let id = +params.get('id');
    //   console.log(id)
    // }); //return 0 if not there
  }
}
