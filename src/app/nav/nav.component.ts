import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  username: string;

  constructor(private amplifyService: AmplifyService,
    private router: Router) {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.username = user.username;
    })
  }

  ngOnInit() {
  }

  onLoginClick() {
    //const URL = "https://ebuy-ecomm-demo.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=383g4r8fp9lah65ua4qpa0rpuu&redirect_uri=http://localhost:4200"
    const URL = "https://ebuy-ecomm-demo.auth.us-east-1.amazoncognito.com/login?response_type=token&client_id=383g4r8fp9lah65ua4qpa0rpuu&redirect_uri=http://localhost:4200"
    window.location.assign(URL);
  }

  Logout() {
    this.amplifyService.auth().signOut()
      .then(() => {
        this.router.navigateByUrl("");
        // console.log(data)
      })
      .catch(() => {
        return false
        // console.log(err)
      });
  }

  Products() {
    this.router.navigateByUrl("/products");
  }

  Cart() {
    this.router.navigateByUrl("/cart");
  }

  addProducts() {
    this.router.navigateByUrl("/addProducts");
  }

}
