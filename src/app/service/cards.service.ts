import { Injectable } from '@angular/core';
import { ICreditCard } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  creditCards:ICreditCard[] = [];

  constructor() { }
}
