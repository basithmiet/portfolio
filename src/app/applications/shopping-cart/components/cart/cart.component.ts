import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  shopMore(){
    this.router.navigate(['/applications/shopping-cart/products']); 
  }
}
