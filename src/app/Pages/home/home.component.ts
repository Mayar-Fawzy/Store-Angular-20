import { Component, inject, signal } from '@angular/core';
import { SidebarComponent } from '../../Layout/sidebar/sidebar.component';
import { CountService } from '../productss/core/Services/count.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [SidebarComponent , ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 private _countService = inject(CountService);
count =this._countService.count;
 Show(){
 this._countService.Show();
}
 reset() {
  this._countService.reset();
  }
   name = signal('');
}
