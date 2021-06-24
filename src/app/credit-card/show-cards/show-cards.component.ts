import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICreditCard } from 'src/app/interfaces/card.interface';
import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-show-cards',
  templateUrl: './show-cards.component.html',
  styleUrls: ['./show-cards.component.scss']
})
export class ShowCardsComponent implements OnInit {
  cards: ICreditCard[] = [];

  constructor(
    private _credit: CardsService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.cards = this._credit.creditCards;
  }

  deleteCard(index: number) {
    this._credit.creditCards.splice(index, 1);
    this.toast.error('Tarjeta eliminada', 'Removida');
  }
}
