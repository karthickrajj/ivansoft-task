import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChartData, ChartOptions } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgChartsModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  piechartdata={
    labels:["person 1","person 2","person 3","person 4","person 5"],
    datasets:[
      {data:[14,22,33,20,11],
        backgroundColor:['#007bff','#FFA38F','#EEEDEB','#FFD18E','#96C9F4'],
        label:'No of Books',
      }
    ]
  }
  barchartdata: ChartData<'bar'> ={
    labels:["person 1","person 2","person 3","person 4","person 5"],
    datasets:[
      {data:[14,22,33,20,11],
        label:'No of Books',
        backgroundColor:'#007bff',
        
      }
    ]
  }
  pieChartOptions:ChartOptions<'pie'> = {
    
    plugins: {
        legend: {
            display: true,
            position: 'bottom', // Positioning the legend below the chart
        },
        
      
        
    }
};

  constructor() { }

  ngOnInit(): void {
  }

}
