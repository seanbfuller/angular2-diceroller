import { Component, OnInit } from '@angular/core';
import { Roll } from '../rolls/roll';
import { RollsService } from '../rolls/rolls.service';

@Component({
  selector: 'app-rolls-skill',
  templateUrl: './rolls-skill.component.html',
  styleUrls: ['./scss/rolls-skill.component-form.scss', './scss/rolls-skill.component-list.scss']
})
export class RollsSkillComponent implements OnInit {

  rolls: Roll[] = [];
  numRolls: number;
  rollModifier: number;
  rollGoal: number;
  rollSuccesses: number;

  constructor(private rollsService: RollsService) {
    // Set default form values
    this.numRolls = 10;
    this.rollModifier = 2;
    this.rollGoal = 14;
    this.rollSuccesses = 0;
  }

  ngOnInit() {
    // Populate on first run
    this.getRolls();
  }

  getRolls(): void {
    this.rolls = this.rollsService.getRolls(this.numRolls, this.rollGoal, this.rollModifier);
    this.rollSuccesses = this.countRollSuccesses();
    console.log(this.rollSuccesses);
  }

  // Count the number of successes
  countRollSuccesses(): number {
    return this.rolls.filter((x,i) => { return x.result; }).length;
  }

}
