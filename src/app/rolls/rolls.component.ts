import { Component, OnInit } from '@angular/core';
import { Roll } from './roll';
import { RollsService } from './rolls.service';

@Component({
  selector: 'app-rolls',
  templateUrl: './rolls.component.html',
  styleUrls: ['./scss/rolls.component-form.scss', './scss/rolls.component-list.scss']
})
export class RollsComponent implements OnInit {

  rolls: Roll[] = [];
  numRolls: number;
  rollModifier: number;
  rollGoal: number;

  constructor(private rollsService: RollsService) {
    this.numRolls = 10;
    this.rollModifier = 5;
    this.rollGoal = 15;
  }

  ngOnInit() {
    this.getRolls();
  }

  getRolls(): void {
    this.clearRolls();
    this.rolls = this.rollsService.getRolls(this.numRolls, this.rollGoal, this.rollModifier);
  }

  clearRolls() {
    this.rolls.length = 0;
  }

}
