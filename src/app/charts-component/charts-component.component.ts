import { Component, OnInit } from '@angular/core';
import {LineChartComponent} from '../line-chart/line-chart.component';
import {PieChartComponent} from '../pie-chart/pie-chart.component';
import {BubbleChartComponent} from '../bubble-chart/bubble-chart.component';
import {BarChartComponent} from '../bar-chart/bar-chart.component';
import {DoughnutChartComponent} from '../doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from '../radar-chart/radar-chart.component';


@Component({
  selector: 'app-charts-component',
  templateUrl: './charts-component.component.html',
  styleUrls: ['./charts-component.component.css']
})
export class ChartsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
