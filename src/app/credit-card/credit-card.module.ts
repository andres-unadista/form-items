import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CreditCardRoutingModule } from './credit-card-routing.module';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { SaveCardComponent } from './save-card/save-card.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [ShowCardsComponent, SaveCardComponent, CardsComponent],
  imports: [
    CommonModule,
    CreditCardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreditCardModule { }
