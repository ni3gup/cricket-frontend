import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: { team: string, country: string };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTeams()
      .subscribe((data: { status: boolean, data: { team: string, country: string } }) => {
        if (data && data.status && data.data) {
          this.teams = data.data;
        }
      });
  }

}
