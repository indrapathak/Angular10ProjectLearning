import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {UserServiceService} from '../user-service.service' ;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private dataVal:UserServiceService) { }
  currentVal=[]
  axis=[]
  
  ngOnInit(): void {
    this.dataVal.getChartsData().subscribe((data=>{
     // console.warn("the data recieved in getcharts data in line chart component ",data)
      for(let values in data)
      {
         this.currentVal.push(data[values].current)
         this.axis.push(values)
      }
      
      console.log("currentVals element" ,this.currentVal)
    }))
  }

  lineChartData: ChartDataSets[] = [
    { data: this.currentVal, label: 'Current' },
  ];

  lineChartLabels: Label[] = this.axis;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors:  [
    {
      borderColor: 'black',
      backgroundColor: 'grey',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
  
}
