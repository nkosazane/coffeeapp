import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.page.html',
  styleUrls: ['./coffees.page.scss'],
})
export class CoffeesPage implements OnInit {
  cart = [];
  items = [];
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
 openCart() {
    this.router.navigate(['cart']);
  }
}
