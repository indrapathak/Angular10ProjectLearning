import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {UserServiceService} from '../user-service.service' ;

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  constructor(private dataVal:UserServiceService) { }
  parameterVal=[]
  axis=[]
  ngOnInit(): void {
    this.dataVal.getChartsData().subscribe((data=>{
     // console.warn("the data recieved in getcharts data in line chart component ",data)
       
         this.parameterVal.push(data[0].frequecy)   
         this.parameterVal.push(data[0].pf)
         this.parameterVal.push(data[0].current)
        
      console.log("parameterVals element" ,this.parameterVal)
    }))
  }

  public doughnutChartColors:any[] = [
    { backgroundColor: ["purple", "#CC0000","#00695c"] }];

  doughnutChartLabels: Label[] = ['frequecy', 'pf', 'current'];
  doughnutChartData: MultiDataSet = [
    this.parameterVal
  ];
  doughnutChartType: ChartType = 'doughnut';

}
