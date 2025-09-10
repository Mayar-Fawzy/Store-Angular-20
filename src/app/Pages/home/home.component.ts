import { Component, inject, signal } from '@angular/core';
import { SidebarComponent } from '../../Layout/sidebar/sidebar.component';
import { CountService } from '../productss/core/Services/count.service';
import { ReactiveFormsModule } from '@angular/forms';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import { Highlight } from '../../Shared/directives/highlight';
@Component({
  selector: 'app-home',
  imports: [SidebarComponent ,CdkDropList, Highlight ,CdkDrag, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = signal('');
 private _countService = inject(CountService);
count =this._countService.count;
 Show(){
 this._countService.Show();
}
 reset() {
  this._countService.reset();
  }
    items = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    const audio = new Audio('/Audio/drop-coin-384921.mp3');
    audio.play();
  }
}
