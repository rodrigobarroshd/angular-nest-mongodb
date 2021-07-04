// import { Component, OnInit } from '@angular/core';
// import { Label } from 'ng2-charts'; // import ng2-charts to use charts
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'; // dependence of ng2-charts

// import { ProductService } from 'src/app/services/product.service';
// import { Product } from '../../interfaces/Product'

// @Component({
//   selector: 'app-charts',
//   templateUrl: './charts.component.html',
//   styleUrls: ['./charts.component.css']
// })

// export class ChartsComponent implements OnInit {

//   public barChartOptions: ChartOptions = {
//     responsive: true,
//     // We use these empty structures as placeholders for dynamic theming.
//     scales: { xAxes: [{}], yAxes: [{}] },
//     plugins: {
//       datalabels: {
//         anchor: 'end',
//         align: 'end',
//       }
//     }
//   };

  
// // Tipo de grafico: line, bar, radar
//   public barChartType: ChartType = 'bar';
//   public barChartLegend = true;
  
//   public barChartData: ChartDataSets[];
//   public barChartLabels: Label[];

//   private data_label = [];
//   private dato = [];
//   private data_arterial_sistolica = [];
//   private data_arterial_diastolica = [];
//   private data_pulso = [];
//   private data_peso = [];
//   private data_altura = [];
//   private data_imc = [];
//   private data_charterial = [];


//   constructor(protected productService: ProductService, private route: ProductService) {  }
//   products: Product[];

//   ngOnInit() {
//     this.getCategoria();
//     this.getProducts(); // Inicialização da lista de produtos
//   }

//   // Função para carregar a lista de produtos
//   getProducts(): void {
//     this.productService.getProducts()
//       .subscribe(
//         res => this.products = res,
//         err => console.log(err)
//       )
//   }

//   getCategoria() {
//     this.productService.getProducts().subscribe(res => {
//       this.dato = res;
//       for (const index in this.dato) {
//         this.data_arterial_sistolica.push(this.dato[index].arterial_sistolica);
//         this.data_arterial_diastolica.push(this.dato[index].arterial_diastolica);
//         this.data_pulso.push(this.dato[index].pulso);
//       }
//       this.cargarDatos(this.data_arterial_diastolica, this.data_pulso, this.data_arterial_sistolica);
//     });
//   }
        
//   cargarDatos(data_arterial_diastolica, data_pulso, data_arterial_sistolica) {
//     this.barChartData = [];
//     this.barChartLabels = [];

//     // exibição de labels
//     for (const index in data_arterial_sistolica) {
//       this.barChartData.push({ data: data_arterial_sistolica[index], label: 'Informe de Dados' });
//       this.data_arterial_sistolica.push(data_pulso[index]);
//       // this.barChartData.push(
//         // {data: data_arterial_sistolica, label: 'Pressão Arterial Siastólica'},
//         // {data: data_arterial_diastolica, label: 'Pressão Arterial Diastólica'},
//         // {data: data_pulso, label: 'Informe de Dados B'},
//         // {data: data_pulso, label: 'Informe de Dados B'},
//         // {data: data_pulso, label: 'Informe de Dados B'},
//         // {data: data_pulso, label: 'Informe de Dados B'},
//         // {data: data_pulso, label: 'Informe de Dados B'}
//       // )
//     }

//     // for (const index in data_arterial_diastolica) {this.barChartLabels.push(data_label[index]);}
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts'; // import ng2-charts to use charts
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js'; // dependence of ng2-charts

import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../interfaces/Product'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[];

  // Tipo de grafico: line, bar, radar
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[];

  private data_label = [];
  private dato = [];
  private data_arterial_sistolica = [];
  private data_arterial_diastolica = [];

  constructor(protected productService: ProductService, private route: ProductService) {  }
  products: Product[];

  ngOnInit() {
    this.getCategoria();
    this.getProducts(); // Inicialização da lista de produtos
  }

  // Função para carregar a lista de produtos
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(
        res => this.products = res,
        err => console.log(err)
      )
  }

  getCategoria() {
    this.productService.getProducts().subscribe(res => {
      this.dato = res;
      for (const index in this.dato) {
        this.data_label.push(this.dato[index].arterial_sistolica);
        this.data_arterial_sistolica.push(this.dato[index].arterial_sistolica);
        this.data_arterial_diastolica.push(this.dato[index].arterial_diastolica);
      }
      this.cargarDatos(this.data_arterial_sistolica, this.data_arterial_diastolica, this.data_label);
    });
  }
        
  cargarDatos(data_arterial_sistolica, data_arterial_diastolica , data_label) {
    this.barChartData = [];
    this.barChartLabels = [];

    this.barChartData.push(
      {data: data_arterial_sistolica, label: 'Pressão Arterial Siastólica'},
      {data: data_arterial_diastolica, label: 'Pressão Arterial Diastólica'},
    )

    for (const index in data_arterial_sistolica) {this.barChartLabels.push("");}
  }
}
