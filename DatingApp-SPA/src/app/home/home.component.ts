import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
registerModel = false;
values: any;
  constructor(private http: HttpClient) { }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(Response => {
      this.values = Response;
    }, error => {
      console.log(error);
    });
}
  ngOnInit() {
    this.getValues();
  }
registerToggle() {
  this.registerModel = true;
}
cancelRegisterMode(registerMode: boolean) {
  this.registerModel = registerMode;
  }
}
