import {Component, ElementRef, OnInit} from '@angular/core';
import {DashboardService} from "../../services/DashboardService";
import  { ChartData, registerables ,ChartOptions, ChartType, ChartConfiguration } from 'chart.js';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];

  constructor(private dashboardService: DashboardService, private el: ElementRef) {
  }

  ngOnInit(): void {

    this.dashboardService.getDemandeParUtilisateur().subscribe(
      data => {
        this.pieChartLabels = Object.keys(data);
        this.pieChartData = Object.values(data);
        this.createPieChart();
      },
      error => {
        console.error('Error loading pie chart data:', error);
      }
    );
    Chart.register(...registerables);
  }


  private createPieChart(): void {
    const canvas = this.el.nativeElement.querySelector('#pieChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: this.pieChartLabels,
          datasets: [{
            data: this.pieChartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true, // Ensure the aspect ratio is maintained
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.label + ': ' + context.raw;
                }
              }
            }
          }
        }
      });
    }
  }
}
