import { Injectable } from '@angular/core';
import { Roll } from './roll';

@Injectable()
export class RollsService {

  rolls: Roll[] = [];

  constructor() { }

  getRolls(numRolls: number, rollGoal: number): Roll[] {
    for(var i=0; i <= numRolls; i++){
      
      // Create the roll
      let r = new Roll;
      r.id = i;
      r.roll = this.generateRandomRoll();

      // update the success/fail message
      if(r.roll >= rollGoal) {
        r.message = "Success";
      }
      else if(r.roll < rollGoal) {
        r.message = "fail";
      }

      // Push onto the collection
      this.rolls.push(r);
    }

    return this.rolls;
  }

  generateRandomRoll(min: number = 1, max: number = 6) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
