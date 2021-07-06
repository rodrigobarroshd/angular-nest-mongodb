
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    // { title: 'Home', url: 'home', icon: 'home' },
    { title: 'Dados Médicos', url: '/product', icon: 'settings' },
    { title: 'Formulario', url: '/product/create', icon: 'settings' },
    { title: 'Graficos', url: '/charts', icon: 'images' }
  ];
  constructor() {

  }
}