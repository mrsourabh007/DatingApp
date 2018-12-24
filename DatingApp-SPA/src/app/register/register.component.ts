import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
@Input() valuesFromHome: any;
@Output() cancelRegister = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
register() {
  this.authService.register(this.model).subscribe(() => {
    console.log('Register Successfully!');
  }, error => {
    console.log(error);
  });
}
cancel() {
  this.cancelRegister.emit(false);
  console.log('Cancel');
}

}
