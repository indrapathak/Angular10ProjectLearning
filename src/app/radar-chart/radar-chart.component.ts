import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {UserServiceService} from '../user-service.service' ;

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

  constructor(private dataVal:UserServiceService) { }
  parameterVal=[]

  ngOnInit(): void {
    this.dataVal.getChartsData().subscribe((data=>{
       console.warn("the data recieved in getcharts data in line chart component ",data)
        
          this.parameterVal.push(data[0].frequecy)   
          this.parameterVal.push(data[2].pf)
          this.parameterVal.push(data[0].current)
          this.parameterVal.push(data[3].voltage)
          this.parameterVal.push(data[0].oee)
         
       console.log("parameterVals element" ,this.parameterVal)
     }))
  }
  radarChartColors:  [
    {
      borderColor: 'black',
      backgroundColor: 'grey',
    },
  ];

 
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['frequecy', 'pf', 'current',
    'voltage', 'oee'];

  public radarChartData: ChartDataSets[] = [
    { data: this.parameterVal, label: 'Machine Data Comparision' }
  ];
  public radarChartType: ChartType = 'radar';


}
