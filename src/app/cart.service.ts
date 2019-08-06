import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private data = [
    {
      category: 'Coffees',
      expanded: true,
      products: [
        { id: 0, name: 'Mochaccino', price: '28',src:'assets/0.jpg' },
        { id: 1, name: 'Macchiato', price: '39',src:'assets/9.jpg' },
        { id: 2, name: 'Café Latte', price: '40',src:'assets/7.jpg' },
        { id: 3, name: 'Americano', price: '17',src:'assets/c1.jpg' },
        { id: 4, name: 'Double Espre ', price: '8',src:'assets/e1.jpg' },
        { id: 5, name: 'Espresso', price: '20',src:'assets/e2.jpg' },
        { id: 5, name: 'Ristretto', price: '30',src:'assets/e3.jpg' },
        { id: 5, name: 'Affogato', price: '32',src:'assets/e4.jpg' }
      ]
    },
    {
      category: 'Coffee Extras',
      expanded: true,
      products: [
        { id: 4, name: 'Milk ', price: '8',src:'assets/m1.jpg' },
        { id: 5, name: 'Foam', price: '6',src:'assets/f1.jpg' },
        { id: 5, name: 'Choc', price: '6',src:'assets/f2.jpg' },
        { id: 5, name: 'Suger', price: '6',src:'assets/s1.jpg' }
      ]
    },
 
  ];
 
  private cart = [];

  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
}

 

