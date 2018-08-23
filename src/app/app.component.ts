import { Component } from '@angular/core';
import { AuthService } from './shared/auth/auth-service';
import { GlobalService } from './shared/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  logged: Boolean = false;

  constructor(
    private authService: AuthService,
    private _globalService: GlobalService
  ) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.authService.isLoggedIn.subscribe(value => {
      this.logged = value;
    }); 
  }
}
