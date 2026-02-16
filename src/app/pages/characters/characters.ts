import { AfterContentInit, AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AttackType } from '../../../assets/enums/AttackType';
import { NgForOf, NgIf } from "@angular/common";
import { ElementType } from '../../../assets/enums/ElementType';
import { BurstType } from '../../../assets/enums/BurstType';
import { ManufacturerType } from '../../../assets/enums/ManufacturerType';
import { RarityType } from '../../../assets/enums/RarityType';
import { RifleType } from '../../../assets/enums/RifleType';
import { CharactersService } from './characters-service';
import { BtnGroup } from "./btn-group/btn-group";
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CharacterMinicardDetails } from './character-minicard-details/character-minicard-details';

@Component({
  selector: 'app-characters',
  imports: [NgForOf, BtnGroup, HttpClientModule, NgIf, CharacterMinicardDetails],
  templateUrl: './characters.html',
  providers : [CharactersService],
  styleUrl: './characters.css',
})
export class Characters implements OnInit {
  attackTypes = Object.entries(AttackType);
  elementTypes = Object.entries(ElementType);
  burstTypes = Object.entries(BurstType);
  manufacturerTypes = Object.entries(ManufacturerType);
  rarityTypes = Object.entries(RarityType);
  rifleTypes = Object.entries(RifleType);


  characters : Character[] = [];

  constructor(private charactersService : CharactersService, private router : Router){}

  ngOnInit(): void {
    this.charactersService.loadCharacters().subscribe({
      next : data => {
        this.characters =  data;
        console.log(this.characters);
      },
      error : messsage => alert(messsage)
    })

  }
  navigate(r : string){
    this.router.navigate([r]);
  }

  filter : Filter = {};
  info(message : any, type : string){
    switch (type) {
      case 'rarityTypes': this.filter.rarityType = message; break;
      case 'elementTypes': this.filter.elementType = message; break;
      case 'rifleTypes': this.filter.rifleType = message; break;
      case 'attackTypes': this.filter.attackType = message; break;
      case 'burstTypes': this.filter.burstType = message; break;
      case 'manufacturerTypes': this.filter.manufacturerType = message; break;
    }
    console.log(this.filter);
    this.charactersService.loadCharacters(this.filter).subscribe({
      next : data => {
        this.characters = data;
        console.log(this.characters);
      },
      error : messsage =>{
        console.log(messsage);
      }
    })
  }

  openCharacter(id : any){
    this.router.navigate(["/characters", id]);
  }

  hoveredElement: HTMLElement | null = null;
  popupCharacter: Character | null = null;
  left : number = 0;
  top : number = 0;
  
  onMouseEnter(event: MouseEvent, character: any) {
    
    this.hoveredElement = (event.currentTarget as HTMLElement);
    this.popupCharacter = null;
    this.popupCharacter = character;
    const popup = document.getElementById("popup");
    if(popup){
      this.left = this.hoveredElement.getBoundingClientRect().left;
      this.top = this.hoveredElement.getBoundingClientRect().top;
    }
  }

}
