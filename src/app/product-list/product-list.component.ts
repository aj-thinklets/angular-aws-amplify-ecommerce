import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import Amplify, { API, Auth } from 'aws-amplify';
import { MySharedService } from '../shared/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  isFetching:boolean = false;

  @Input() products: any = [];
  private isAdded;
  private singleProduct;

  constructor(
    private router: Router,
    private mySharedService: MySharedService  ) { }

  params = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
    }
  }
  ngOnInit() {

    
    // this.isAdded = new Array(this.products.length);
    // this.isAdded.fill(false, 0, this.products.length);
    // console.log('this.isAdded -> ', this.isAdded, this.products);

    // this.getProducts();

    // this.mySharedService.getProducts().subscribe(data => {
    //   if (data && data.length > 0) {
    //     console.log('inside-Data1', data)
    //   } else {
    //     this.products.map((item, index) => {
    //       this.isAdded[index] = false;
    //     });
    //   }

    // });

    // Auth.currentSession()
    //   .then(data => console.log('data', data))
    //   .catch(err => console.log('err', err));
  }

  getProducts() {
    this.isFetching = true;
    API.get("apid8e90cfc", "/products", this.params).then(data => {
      console.log("outer", data.lenght);
      this.products = data.data;
     /* if (data.data && data.data.length > 0) {
        console.log('Inside')
        this.products = data.data;
        console.log('Data', this.products);
      } else {
        console.log('Outside')
        this.products.map((item, index) => {
          this.isAdded[index] = false;
        });
      }
      */

     // this.products = data.data;
     // this.isAdded = new Array(this.products.length);
    //  this.isAdded.fill(false, 0, this.products.length);
    //  console.log('this.isAdded -> ', this.isAdded, this.products);
     // console.log('Data', this.products);
      //debugger;
      // Add your code here
      this.isFetching = false;
    }).catch(error => {
      debugger;
      console.log(error.response)
    });
    
  }

  // Add item in cart on Button click
  // ===============================

  addToCart(event, productId) {
    
    // If Item is already added then display alert message
  if (event.target.classList.contains('btn-success')) {
      alert('This product is already added into cart.');
      return false;
    } 

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === productId) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === productId;
    });
    //console.log('this.singleProduct', this.singleProduct);
   // this.cartItems.push(this.singleProduct[0]);
    this.mySharedService.addProductToCart(this.singleProduct[0]);
  }




}
