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

  // Tipo de graficos: line, bar, radar, horizontalBar
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[];

  private dato = [];
  private data_label = [];
  private data_day = [];
  private data_arterial_sistolica = [];
  private data_arterial_diastolica = [];
  private data_pulso = [];
  private data_peso = [];
  private data_altura = [];
  private data_imc = [];
  private data_charterial = [];
  private data_imageurl = [];

  private days = [];
  private day = 0; // Var temp to sum

  constructor(protected productService: ProductService, private route: ProductService) { }
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
        this.data_pulso.push(this.dato[index].pulso);
        this.data_peso.push(this.dato[index].peso);
        this.data_altura.push(this.dato[index].altura);
        this.data_imc.push(this.dato[index].imc);
        this.data_charterial.push(this.dato[index].charterial);

        this.day++;
        this.days[index] = ("Dia " + this.day + " : " + this.dato[index].createdAt);
      }
      this.cargarDatos(this.data_charterial, this.data_imc, this.data_altura, this.data_arterial_sistolica, this.data_peso, this.data_arterial_diastolica, this.data_pulso, this.days);
    });
  }

  cargarDatos(data_charterial, data_imc, data_altura, data_arterial_sistolica, data_peso, data_arterial_diastolica, data_pulso, days) {
    this.barChartData = [];
    this.barChartLabels = [];

    this.barChartData.push(
      { data: data_arterial_sistolica, label: 'Pressão Arterial Siastólica' },
      { data: data_arterial_diastolica, label: 'Pressão Arterial Diastólica' },
      { data: data_pulso, label: 'Pulso' },
      { data: data_peso, label: 'Peso (kg)' },
      { data: data_altura, label: 'Altura' },
      { data: data_imc, label: 'IMC' },
      { data: data_charterial, label: 'Hipertensão arterial' }
    )

    // traversing the array to add days
    for (const index in days) { this.barChartLabels.push(days[index]); }
  }
}
