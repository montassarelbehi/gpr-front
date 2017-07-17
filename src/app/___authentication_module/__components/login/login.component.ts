import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../__services/authentication_service/authentication.service';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.cin, this.model.password)
        .subscribe( data => {
          this.router.navigate(['/engins']);
        },
        (error) => {
          this.flashMessagesService.show(error, {cssClass: 'alert-danger', timeout: 4000});
          this.loading = false;
        });
  }

}
