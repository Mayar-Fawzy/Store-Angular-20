import { Component, inject, Input } from '@angular/core';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { CountService } from '../../Pages/productss/core/Services/count.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLinkActive,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
private _count = inject(CountService);
count=this._count.count;
}
