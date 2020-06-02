import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  private id: number;
  players: any;

  constructor(public router: Router, private dataService: DataService) {
    this.id = +router.url.split('/')[2];
  }

  ngOnInit() {
    this.dataService.getPlayersOfTeam(this.id)
      .subscribe((data: { status: boolean, data: { id: number, name: string, country: string, team: string } }) => {
        if (data && data.status && data.data) {
          this.players = data.data;
        }
      });
  }

}
