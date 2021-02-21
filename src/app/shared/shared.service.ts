/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { CartComponent } from '../cart/cart.component';


@Injectable()
export class MySharedService {
  // Local variable which stores 
  public cartItems = [];
  public products = new Subject();


  getProducts(): Observable<any> {
    console.log('this.cartItems :', this.cartItems);
    return this.products.asObservable();
  }

  setProducts(products) {
    this.cartItems.push(...products);
    this.products.next(products);
  }

  // Add single product to the cart
  addProductToCart(product) {
    this.cartItems.push(product);
    this.products.next(this.cartItems);
  }

  // Remove single product from the cart
  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    // Update Observable value
    console.log('beforenexr', this.cartItems);
    this.products.next(this.cartItems);
    console.log('updateObs', this.cartItems);
  }

  // Remove all the items added to the cart
  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  // Calculate total price on item added to the cart
  getTotalPrice() {
    let total = 0;

    this.cartItems.map(item => {
      console.log('Price', item.price)
      total += item.price;

      console.log('Total', total)
    });

    return total

  }

}

/*

  username: string;

  constructor(private amplifyService: AmplifyService,
    private router: Router) {
    this.amplifyService.auth().currentAuthenticatedUser().then(user => {
      this.username = user.username;
    })
  }

  products;

  params = {
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {  // OPTIONAL
    }
  }
  ngOnInit() {
   // this.getProducts();
    Auth.currentSession()
      .then(data => console.log('data', data))
      .catch(err => console.log('err', err));
  }

  getProducts() {
    API.get("apid8e90cfc", "/products", this.params).then(data => {
      this.products = data.data;
      console.log(this.products);
      //debugger;
      // Add your code here
    }).catch(error => {
      debugger;
      console.log(error.response)
    });
  }


  async addProducts1() {
    let apiName = 'apid8e90cfc'; // replace this with your api name.
    let path = '/products'; //replace this with the path you have configured on your API
    let myInit = {
      body: {
        "id": "107",
        "name": "Paneer",
        "desc": "test post-demo"
      },
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
      }
    }
    console.log(myInit);
    await API.put(apiName, path, myInit).then(data => {
      // Add your code here
      this.products = data.data;
      console.log(this.products);
    }).catch(error => {
      console.log(error.response)
    });
  }

  addProducts() {
    let apiName = 'apid8e90cfc'; // replace this with your api name.
    let path = '/products'; //replace this with the path you have configured on your API
    let myInit = {
      body: {
        "id": "106",
        "name": "Paneer",
        "desc": "test post-demo",
        "customer": this.username
      },
      headers: {
        //Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
      }
    }
    console.log(myInit);
    API.put(apiName, path, myInit).then(data => {
      // Add your code here
      this.products = data;
      console.log(this.products);
    }).catch(error => {
      console.log(error.response)
    });
  }

  deleteProducts() {

    let apiName = 'apid8e90cfc'; // replace this with your api name.
    let path = '/products'; //replace this with the path you have configured on your API
    let myInit = {
         key: {
        "id": "104"
      }
    }
    console.log(myInit);
    API.del(apiName, path, myInit)
      .then(response => {
        console.log(response);
        // Add your code here
      })
      .catch(error => {
        console.log(error.response)
      })
    }

    onSubmit(form) {
      console.log(form.value);
      let apiName = 'apid8e90cfc'; // replace this with your api name.
      let path = '/products'; //replace this with the path you have configured on your API
      let myInit = {
        body: form.value,
        headers: {
          //Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`
        }
      }
      API.put(apiName, path, myInit).then(data => {
        // Add your code here
       // this.products = data;
        console.log(data);
        this.products = data;
        window.alert('Order placed successfully');
        form.reset();
      }).catch(error => {
        console.log(error.response)
      });
      }
  }
  */