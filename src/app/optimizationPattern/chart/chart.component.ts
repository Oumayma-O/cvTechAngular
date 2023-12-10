import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgZone,
  OnInit,
  inject,
} from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartComponent implements OnInit {
  @Input() oddCount: number = 0;
  @Input() evenCount: number = 0;
  ngZone: NgZone = inject(NgZone);
  chart: any;

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      this.createChart();
    });
  }

  createChart() {
    const data = [
      { users: 'Workers', count: this.oddCount },
      { users: 'Boss', count: this.evenCount },
    ];
    // run outside of Angular zone to avoid change detection
    this.chart = new Chart('MyChart', {
      type: 'bar',

      data: {
        labels: data.map((row) => row.users),

        datasets: [
          {
            label: 'Entreprise stats',
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  }
}
