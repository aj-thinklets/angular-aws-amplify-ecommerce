import { Component, OnInit } from '@angular/core';
import Amplify, { API, Auth, formContainer } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular'
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators }  from '@angular/forms'
import { uuid } from 'uuidv4';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  productform = new FormGroup({
    id: new FormControl(uuid()),
    date: new FormControl(Date()),
    productName: new  FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl(''),
  })

  ngOnInit() {
  }

  onSave(form) {
      console.log(form.value);
      let apiName = 'apid8e90cfc'; // replace this with your api name.
      let path = '/products'; //replace this with the path you have configured on your API
      let myInit = {
        body: form.value,
        headers: {
          //Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        }
      }
      API.post(apiName, path, myInit).then(data => {
        // Add your code here
       // this.products = data;
        console.log(data);
        //this.products = data;
        window.alert('Order placed successfully');
       // form.reset();
      }).catch(error => {
        console.log(error.response)
      });
   // this.router.navigateByUrl("/products");
  }

  onCancel() {
    //this.router.navigateByUrl("/products");
    this.productform.reset();
  }

}
