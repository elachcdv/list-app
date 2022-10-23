import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IngredientsClass } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // emit event
  @Output() ingredientAdded = new EventEmitter<IngredientsClass>();
  // @Output() ingredientRemoved = new EventEmitter<IngredientsClass>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new IngredientsClass(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
    console.log('new ingredient added');
    // console.log(newIngredient);
  }

  onRemoveItem() {
    console.log('remove item');
  }
}
