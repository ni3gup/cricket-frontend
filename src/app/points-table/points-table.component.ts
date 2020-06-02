import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {
  pointsTable: { team: string, total_points: number, total_matches: number };
  
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPointsTable()
      .subscribe((data: { status: boolean, data: { team: string, total_points: number, total_matches: number } }) => {
        if (data && data.status && data.data) {
          this.pointsTable = data.data;
        }
      });
  }

}
