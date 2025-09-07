import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count = signal(0);
 Show(){
  this.count.update(n => n + 1);
  localStorage.setItem('count', this.count().toString());
}
 reset() {
    this.count.set(0);
    localStorage.setItem('count', '0');
  }
}
