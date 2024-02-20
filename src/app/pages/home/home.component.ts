import { Component } from '@angular/core';
import {  SlidersComponent} from '../../shared/components/sliders/banner/sliders.component';
import {  CategoryComponent} from '../../shared/components/sliders/category/category.component';
import {  GridCardComponent} from '../../shared/components/grid-card/grid-card.component';
import {  TabsComponent} from '../../shared/components/tabs/tabs.component';
import {  BannerComponent} from '../../shared/components/banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SlidersComponent,
    CategoryComponent,
    GridCardComponent,
    TabsComponent,
    BannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
