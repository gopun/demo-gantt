import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  chartData = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    const postData = {
      vesselID: 9685451,
      scheduleID: 2,
      scheduleVersion: 1,
      allocatedto: 0
    };
    this.apiService.post('GetVesselDockPlan', postData).subscribe(chartDataResp => {
      if (chartDataResp[`data`] && chartDataResp[`data`][`dockPlans`]) {
        this.chartData = (chartDataResp[`data`][`dockPlans`] || []).map(innerData => ({
          ...innerData,
          start: new Date(innerData.end),
          end: new Date(innerData.start),
        }));
      }
    }, chartDataErr => {
      console.log('\n chartDataErr...', chartDataErr);
    });
  }
  checkUpdated(evt) {
    console.log('\n evt...', evt);
  }
}
