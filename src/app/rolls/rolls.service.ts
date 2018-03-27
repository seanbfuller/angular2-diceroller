import { Injectable } from '@angular/core';
import { Roll } from './roll';

@Injectable()
export class RollsService {

  rolls: Roll[] = [];

  constructor() { }

  getRolls(numRolls: number, rollGoal: number, rollModifier: number): Roll[] {
    // Clean out old rolls on this object before proceeding.
    this.clearRolls();

    // Build the number of requested rolls
    for(var i=1; i <= numRolls; i++){
      
      // Create the roll
      let r = new Roll;
      r.id = i;
      r.roll = this.generateRandomRoll();
      r.roll = r.roll + rollModifier;

      // update the success/fail message
      if(r.roll - rollModifier === 20) {
        r.result = true;
        r.critical_success = true;
        //r.message = "Critical Hit!!!";
      }
      else if(r.roll >= rollGoal) {
        r.result = true;
        //r.message = "Hit";
      }
      else if(r.roll - rollModifier === 1) {
        r.result = false;
        r.critical_fail = true;
        //r.message = "Critical Miss!!!";
      }
      else {
        r.result = false;
        //r.message = "Miss";
      }

      // Push onto the collection
      this.rolls.push(r);
    }

    return this.rolls;
  }

  clearRolls() {
    this.rolls = [];
  }

  generateRandomRoll(min: number = 1, max: number = 20) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
