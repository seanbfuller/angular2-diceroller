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

  constructor(private rollsService: RollsService) {
    this.numRolls = 5;
  }

  ngOnInit() {
    this.getRolls();
  }

  getRolls(): void {
    this.clearRolls();
    this.rolls = this.rollsService.getRolls(this.numRolls);
  }

  clearRolls() {
    this.rolls.length = 0;
  }

}
