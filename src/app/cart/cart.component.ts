import { Component, OnInit } from '@angular/core';
import { MySharedService } from '../shared/shared.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  private cartItems;
  private totalAmmount;
  private items;
  private cartProductCount: number = 0;

  constructor(
    private mySharedService: MySharedService,
  ) { }

  ngOnInit() {
    this.mySharedService.getProducts().subscribe(data=> {
      console.log('Inside myshared service')
      this.cartItems = data;
      this.cartProductCount = data.length;
      console.log('cartData', this.cartItems)

      this.totalAmmount = this.mySharedService.getTotalPrice();
    });

  }

  
  // Remove item from cart list
  removeItemFromCart(productId) {
 /*  this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }
    });

    this.mySharedService.setProducts(this.cartItems); */

    this.mySharedService.removeProductFromCart(productId);

  }

  emptyCart() {
    this.mySharedService.emptryCart();
  }

  confirmOrder() {
    console.log(this.cartItems);
  }
}
