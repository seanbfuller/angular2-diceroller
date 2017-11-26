import { Injectable } from '@angular/core';
import { Roll } from '../roll';

@Injectable()
export class RollsService {

  rolls: Roll[] = [];

  constructor() { }

  getRolls(numRolls: number): Roll[] {
    for(var i=0; i <= numRolls; i++){
      this.rolls.push({
        id: i,
        roll: this.generateRandomRoll()
      });
    }

    return this.rolls;
  }

  generateRandomRoll(min: number = 1, max: number = 6) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }
}
