import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {UserServiceService} from '../user-service.service' ;
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  // constructor() { }
  constructor(private dataVal:UserServiceService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  parameterVal=[]
  axis=[]
  
  ngOnInit(): void {
    this.dataVal.getChartsData().subscribe((data=>{
    //  console.warn("the data recieved in getcharts data in pie chart component ",data)
       
         this.parameterVal.push(data[0].voltage)   
         this.parameterVal.push(data[0].pf)
         this.parameterVal.push(data[0].oee)
        
      console.log("parameterVals element" ,this.parameterVal)
    }))
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartColors:any[] = [
    { backgroundColor: ["#aa66cc", "red","#2BBBAD"] }];
  public pieChartLabels: Label[] = ['voltage', 'pf', 'oee'];
  public pieChartData: SingleDataSet = this.parameterVal;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

 

}
