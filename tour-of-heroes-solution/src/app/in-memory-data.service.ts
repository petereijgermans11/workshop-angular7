import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', issues: 111 },
      { id: 12, name: 'Narco', issues: 121 },
      { id: 13, name: 'Bombasto',  issues: 137 },
      { id: 14, name: 'Celeritas',  issues: 148 },
      { id: 15, name: 'Magneta',  issues: 159 },
      { id: 16, name: 'RubberMan',  issues: 169 },
      { id: 17, name: 'Dynama',  issues: 192 }      
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
