import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ebuy';

   signedIn = false;

  constructor(
    private amplifyService: AmplifyService
    ) {}

  ngOnInit()
    { 
   
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state == "signedIn") {
        this.signedIn = true;
      //  this.router.navigateByUrl("/products");
      }
    })
  }







}
