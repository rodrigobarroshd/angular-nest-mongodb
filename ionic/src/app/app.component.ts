
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Product', url: '/product', icon: 'settings' },
    { title: 'Create', url: '/product/create', icon: 'settings' },
    { title: 'Charts', url: '/charts', icon: 'images' }
  ];
  constructor() {

  }
}