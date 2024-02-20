import { Component } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatBadgeModule,
    MatButtonModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

}
