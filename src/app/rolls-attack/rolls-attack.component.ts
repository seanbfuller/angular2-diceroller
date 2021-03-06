import { Component, OnInit } from '@angular/core';
import { Roll } from '../rolls/roll';
import { RollsService } from '../rolls/rolls.service';

@Component({
  selector: 'app-rolls-attack',
  templateUrl: './rolls-attack.component.html',
  styleUrls: ['./scss/rolls-attack.component-form.scss', './scss/rolls-attack.component-list.scss']
})
export class RollsAttackComponent implements OnInit {

  rolls: Roll[];
  numRolls: number;
  rollModifier: number;
  rollGoal: number;
  rollSuccesses: number;

  constructor(private rollsService: RollsService) {
    // Set default form values
    this.numRolls = 10;
    this.rollModifier = 5;
    this.rollGoal = 15;
    this.rollSuccesses = 0;
  }

  ngOnInit() {
    // Populate on the first run
    this.getRolls();
  }

  getRolls(): void {
    this.rolls = this.rollsService.getRolls(this.numRolls, this.rollGoal, this.rollModifier);
    this.buildRollMessages();
    this.rollSuccesses = this.countRollSuccesses(this.rolls);
    console.log(this.rollSuccesses);
  }

  // Build the message based on the result
  buildRollMessages() {
    for (var r in this.rolls) {
      // With hit rolls we check for criticals
      if (this.rolls[r].critical_fail === true) {
        this.rolls[r].message = "Critical Failure!!!";
      }
      else if (this.rolls[r].critical_success === true) {
        this.rolls[r].message = "Critical Hit!!!";
      }
      else if (this.rolls[r].result === true) {
        this.rolls[r].message = "Hit";
      }
      else {
        this.rolls[r].message = "Miss"; 
      }
    }
  }

  // Count the number of successes
  countRollSuccesses(rolls: Roll[]): number {
    return rolls.filter((x,i) => { return x.result; }).length;
  }

}
