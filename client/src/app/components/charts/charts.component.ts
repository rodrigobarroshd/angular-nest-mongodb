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
  private data_name2 = [];
  private data_name3 = [];

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
        this.data_label.push(this.dato[index].name1);
        this.data_name2.push(this.dato[index].name2);
        this.data_name3.push(this.dato[index].name3);
      }
      this.cargarDatos(this.data_name2, this.data_name3, this.data_label);
    });
  }
        
  cargarDatos(data_name2, data_name3 , data_label) {
    this.barChartData = [];
    this.barChartLabels = [];

    this.barChartData.push(
      {data: data_name2, label: 'Informe de Dados A'},
      {data: data_name3, label: 'Informe de Dados B'}
    )

    for (const index in data_name2) {this.barChartLabels.push(data_label[index]);}
  }
}
