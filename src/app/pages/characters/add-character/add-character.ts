import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";
import { AttackType } from '../../../../assets/enums/AttackType';
import { ElementType } from '../../../../assets/enums/ElementType';
import { BurstType } from '../../../../assets/enums/BurstType';
import { ManufacturerType } from '../../../../assets/enums/ManufacturerType';
import { RarityType } from '../../../../assets/enums/RarityType';
import { RifleType } from '../../../../assets/enums/RifleType';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BtnGroup } from "../btn-group/btn-group";
import { CharactersService } from '../characters-service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-character',
  imports: [NgForOf, ReactiveFormsModule, FormsModule, HttpClientModule, BtnGroup],
  templateUrl: './add-character.html',
  providers : [CharactersService],
  styleUrl: './add-character.css',
})
export class AddCharacter {
  attackTypes = Object.entries(AttackType);
  elementTypes = Object.entries(ElementType);
  burstTypes = Object.entries(BurstType);
  manufacturerTypes = Object.entries(ManufacturerType);
  rarityTypes = Object.entries(RarityType);
  rifleTypes = Object.entries(RifleType);

  constructor(private charactersService : CharactersService, private router : Router){}
  
  addCharacterForm = new FormGroup({
    "name" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "imgUrl" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "burstType" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "elementType" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "attackType" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "manufacturerType" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "rarityType" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "rifleType" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "description" : new FormControl('', {nonNullable : true, validators : [Validators.required]})
  }
)

  createCharacter(){
    this.charactersService.addCharacter(this.addCharacterForm.getRawValue() as Character).subscribe({
      next : data => {
        console.log(data),
        this.router.navigate(['/characters']);
      },
      error : message => alert(message)
    })
  }

  selectType(value: string, type: string) {
    this.addCharacterForm.get(type)?.setValue(value);
  }
}
