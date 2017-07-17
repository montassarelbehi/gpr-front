import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../__services/authentication_service/authentication.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  model: any = {};
  loading = false;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private flashMessagesService: FlashMessagesService) { }

  register() {
    this.loading = true;
    this.authenticationService.register(this.model)
        .subscribe(data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.flashMessagesService.show('Registration avec succés', {cssClass: 'alert-success', timeout: 4000});
          this.router.navigate(['/login']);
        },
        error => {
          this.flashMessagesService.show(error, {cssClass: 'alert-danget', timeout: 4000});
          this.loading = false;
        })
  }

}
