import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import {UserServiceService} from '../user-service.service' ;

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  constructor(private dataVal:UserServiceService) { }
  voltageVal=[]
  axis=[]
  ngOnInit(): void {
    this.dataVal.getChartsData().subscribe((data=>{
   // console.warn("the data recieved in getcharts data in line chart component ",data)
      for(let values in data)
      {
         this.voltageVal.push(data[values].current)
         this.axis.push(values)
      }
      console.log("voltageVals element" ,this.voltageVal)
    }))
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  
  barChartLabels: Label[] = this.axis;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: this.voltageVal, label: 'Voltage' }
  ];
}
