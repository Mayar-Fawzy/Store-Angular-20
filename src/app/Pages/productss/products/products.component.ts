import { Component, inject, signal, Signal } from '@angular/core';
import { NavbarComponent } from "../../../Layout/navbar/navbar.component";
import { CountService } from '../core/Services/count.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  private _countService = inject(CountService);
count =this._countService.count;
 Show(){
 this._countService.Show();
}
 reset() {
  this._countService.reset();
  }
}
