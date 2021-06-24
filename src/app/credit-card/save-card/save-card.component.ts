import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICreditCard } from 'src/app/interfaces/card.interface';

import { ToastrService } from 'ngx-toastr';

import { CardsService } from 'src/app/service/cards.service';

@Component({
  selector: 'app-save-card',
  templateUrl: './save-card.component.html',
  styleUrls: ['./save-card.component.scss']
})
export class SaveCardComponent implements OnInit {
  formGroupCard:FormGroup;

  constructor(
    private _credit:CardsService,
    private formbuilder: FormBuilder,
    private toast:ToastrService
  ) {
    this.formGroupCard = formbuilder.group({
      user: ['', [Validators.required]],
      numberCard: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      dateCard: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
    })
  }

  ngOnInit(): void {
  }

  saveCard(){
    if (this.formGroupCard.invalid) {
      return;
    }
    const credit:ICreditCard = this.formGroupCard.value;
    this._credit.creditCards.push(credit);
    this.formGroupCard.reset();
    this.toast.success('Tarjeta añadida al listado', 'Éxito')
  }

}
