
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

// import { Component } from '@angular/core';
// import { MenuController } from '@ionic/angular';

// @Component({
//   selector: 'app-root',
//   templateUrl: 'app.component.html',
//   styleUrls: ['app.component.scss'],
// })
// export class AppComponent {

// constructor(private menu: MenuController) { }

//   openFirst() {
//     this.menu.enable(true, 'first');
//     this.menu.open('first');
//   }

//   openEnd() {
//     this.menu.open('end');
//   }

//   openCustom() {
//     this.menu.enable(true, 'custom');
//     this.menu.open('custom');
//   }
// }