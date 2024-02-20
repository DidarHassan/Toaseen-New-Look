import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    MatTabsModule,
    AsyncPipe,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
      ];
    })
  );


  tabsItems: any =[
    {
      title: 'product',
      imgUrl: "http://localhost:4200/assets/7.png"
    },
    {
      title: 'product',
      imgUrl: "http://localhost:4200/assets/6.png"
    },
    {
      title: 'product',
      imgUrl: "http://localhost:4200/assets/7.png"
    },
    {
      title: 'product',
      imgUrl: "http://localhost:4200/assets/6.png"
    },
  ]
}
