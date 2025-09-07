import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  count = signal(0);
 Show(){
  this.count.update(n => n + 1);
}
 reset() {
    this.count.set(0);
  }
}
