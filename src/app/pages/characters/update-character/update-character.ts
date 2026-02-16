import { Component, OnInit } from '@angular/core';
import { BtnGroup } from "../btn-group/btn-group";
import { AttackType } from '../../../../assets/enums/AttackType';
import { ElementType } from '../../../../assets/enums/ElementType';
import { BurstType } from '../../../../assets/enums/BurstType';
import { ManufacturerType } from '../../../../assets/enums/ManufacturerType';
import { RarityType } from '../../../../assets/enums/RarityType';
import { RifleType } from '../../../../assets/enums/RifleType';
import { CharactersService } from '../characters-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-update-character',
  imports: [BtnGroup, ReactiveFormsModule, HttpClientModule, NgIf],
  templateUrl: './update-character.html',
  providers : [CharactersService],
  styleUrl: './update-character.css',
})
export class UpdateCharacter implements OnInit{
  attackTypes = Object.entries(AttackType);
  elementTypes = Object.entries(ElementType);
  burstTypes = Object.entries(BurstType);
  manufacturerTypes = Object.entries(ManufacturerType);
  rarityTypes = Object.entries(RarityType);
  rifleTypes = Object.entries(RifleType);

  character : Character | undefined;

  constructor(private charactersService : CharactersService, private router : Router, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get("id");
      if(id){
        this.charactersService.getCharacterById(Number(id)).subscribe({
          next : data => {
            this.character = data
            this.updateCharacterForm.patchValue({
              id : this.character.id,
              name: this.character.name as string,
              imgUrl: this.character.imgUrl as string,
              burstType: this.character.burstType as string,
              elementType: this.character.elementType as string,
              attackType: this.character.attackType as string,
              manufacturerType: this.character.manufacturerType as string,
              rarityType: this.character.rarityType as string,
              rifleType: this.character.rifleType as string,
              description: this.character.description as string
            });
          },
          error : message => alert(message)
        });
      }
    });
  }
  
  updateCharacterForm = new FormGroup({
    "id" : new FormControl(0, {nonNullable : true, validators : [Validators.required]}),
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

  updateCharacter(){
    this.charactersService.updateCharacter(this.updateCharacterForm.getRawValue() as Character).subscribe({
      next : data => {
        console.log(data),
        this.router.navigate(['/characters']);
      },
      error : message => alert(message)
    })
  }

  selectType(value: any, type: string) {
    this.updateCharacterForm.get(type)?.setValue(value);
  }
}
