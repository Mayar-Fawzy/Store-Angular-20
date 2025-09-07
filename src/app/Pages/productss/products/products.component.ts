import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
count = signal(0);
 Show(){
  this.count.update(n => n + 1);
}
 reset() {
    this.count.set(0);
  }
}
