import { Component, OnInit } from '@angular/core';
import { Roll } from './roll';
import { RollsService } from './rolls.service';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./rolls.component.css']
})
export class RollsComponent implements OnInit {

  rolls: Roll[] = [];
  numRolls: number;
  rollGoal: number;

  constructor(private rollsService: RollsService) {
    this.numRolls = 10;
    this.rollGoal = 5;
  }

  ngOnInit() {
    this.getRolls();
  }

  getRolls(): void {
    this.clearRolls();
    this.rolls = this.rollsService.getRolls(this.numRolls, this.rollGoal);
  }

  clearRolls() {
    this.rolls.length = 0;
  }

}
