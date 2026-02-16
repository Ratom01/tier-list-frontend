import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { AttackType } from '../../../../assets/enums/AttackType';
import { ElementType } from '../../../../assets/enums/ElementType';
import { BurstType } from '../../../../assets/enums/BurstType';
import { RarityType } from '../../../../assets/enums/RarityType';
import { ManufacturerType } from '../../../../assets/enums/ManufacturerType';
import { RifleType } from '../../../../assets/enums/RifleType';
import { RankType } from '../../../../assets/enums/RankType';
import { timeout } from 'rxjs';
import { RankingService } from '../ranking/ranking-service';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'character-minicard-details',
  imports: [NgIf, NgForOf],
  templateUrl: './character-minicard-details.html',
  providers: [RankingService],
  styleUrl: './character-minicard-details.css',
})
export class CharacterMinicardDetails implements AfterViewInit, OnInit{
  
  @Input() character : Character | null = null;
  @Input() parent : HTMLElement | null = null;
  left : number = 0;
  top : number = 0;
  ranking : Ranking | null = null;

  @ViewChild(`background`) background! : ElementRef;

  constructor(private rankingService : RankingService){

  }

  
  ngOnInit(): void {
    if(this.character?.id){
      this.rankingService.getRankingsByCharacterId(this.character?.id).subscribe({
        next: data => {
          this.ranking = data;
          console.log(data);
        },
        error: message => console.log("Nincs rankja a karakternek")
      })
    }
  }

  ngAfterViewInit(): void {
    const rect = this.background.nativeElement.getBoundingClientRect();
    setTimeout(()=>{
      if (this.parent && rect){
      this.left = this.parent.getBoundingClientRect().left + this.parent.getBoundingClientRect().width/2 - rect.width/2;
      this.top = this.parent.getBoundingClientRect().top - rect?.height;
      console.log("Hello");
      }
    });
  }
  // ngAfterViewInit(){
  //   console.log("hello")
  //   const background = document.getElementById("backgroundDiv");

  //   if (this.parent) {
  //     const rect = this.parent.getBoundingClientRect();
  //     this.left = rect.left;
  //     this.top = rect.top;
  //   }
  // }

  attackTypes = Object.entries(AttackType);
  elementTypes = Object.entries(ElementType);
  burstTypes = Object.entries(BurstType);
  manufacturerTypes = Object.entries(ManufacturerType);
  rarityTypes = Object.entries(RarityType);
  rifleTypes = Object.entries(RifleType);
  rankType = Object.entries(RankType);
  
  // @Input() element : string = "-";
  // @Input() weapon : string = "-";
  // @Input() manufacturer : string = "-";
  // @Input() burst : string = "-";
  
}
