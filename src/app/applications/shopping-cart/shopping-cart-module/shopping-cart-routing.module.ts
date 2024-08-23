import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Define the parent route with child routes
const routes: Routes = [
  { 
    path: '', // Base route for shopping-cart, i.e., 'applications/shopping-cart'
    loadComponent: () => import('../shopping-cart.component').then((c) => c.ShoppingCartComponent),
    children: [
      {
        path: '', // Default child route (this will load ProductsComponent)
        loadComponent: () => import('../components/products/products.component').then((c) => c.ProductsComponent),
        pathMatch: 'full',
      },
      { 
        path: 'products',  // Route for products under shopping-cart
        loadComponent: () => import('../components/products/products.component').then((c) => c.ProductsComponent),
      },
      { 
        path: 'cart',  // Route for the cart under shopping-cart
        loadComponent: () => import('../components/cart/cart.component').then((c) => c.CartComponent),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingCartRoutingModule { }
