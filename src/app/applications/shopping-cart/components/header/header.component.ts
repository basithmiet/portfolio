import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
  }

  redirectTo(redirectPath:string){
    this.router.navigate([redirectPath]); 
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }
}
