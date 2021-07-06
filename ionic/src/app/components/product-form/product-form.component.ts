import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  product: Product = {
    arterial_sistolica: 0[''],
    arterial_diastolica: 0[''],
    pulso: 0[''],
    peso: 0[''],
    altura: 0[''],
    imc: 0[''],
    charterial: 0[''],
    imageURL: '',
    createdAt: ''
  };
  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { 
      let imageURL = '';
      let now = new Date
      let hour = now.getHours()
      
      if (hour > 5 && hour < 18 ) { // Dia
        imageURL = 'https://cdn.icon-icons.com/icons2/33/PNG/256/sunny_sunshine_weather_2778.png';
      } else { // Noite
        imageURL = 'https://cdn.icon-icons.com/icons2/2035/PNG/256/weather_half_moon_stars_night_icon_124157.png';
      }
      // Salvando alteração
      this.product.imageURL=(imageURL);
      this.product.createdAt = "" + now.getHours() + ":" + now.getMinutes() + ", " + now.toDateString();
  }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.productService.getProduct(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.product = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        err => console.log(err)
      )
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService.updateProduct(this.product._id, this.product)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/product'])
        },
        err => console.log(err)
      )
  }

}
