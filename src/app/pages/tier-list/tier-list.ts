import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters/characters-service';
import { RankingService } from '../characters/ranking/ranking-service';
import { HttpClientModule } from '@angular/common/http';
import { AttackType } from '../../../assets/enums/AttackType';
import { RankType } from '../../../assets/enums/RankType';
import { NgForOf, NgIf } from "@angular/common";
import { MiniCharacterCard } from './mini-character-card/mini-character-card';
import { BurstType } from '../../../assets/enums/BurstType';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tier-list',
  imports: [HttpClientModule, NgForOf, NgIf, MiniCharacterCard],
  templateUrl: './tier-list.html',
  providers: [CharactersService, RankingService],
  styleUrl: './tier-list.css',
})
export class TierList implements OnInit{
  
  rankTypes = Object.entries(RankType);
  
  burst1 : Ranking[] = [];
  burst2 : Ranking[] = [];
  burst3 : Ranking[] = [];
  burstTypes = Object.entries(BurstType);

  sorting : keyof Ranking = "story";

  constructor(private characterService : CharactersService, private rankingService : RankingService, private router : Router){}

  ngOnInit(): void {
    this.rankingService.getAllRanking().subscribe({
      next: data => {
        data.forEach(element => {
          //console.log(element['story'] == this.rankTypes[1][0]);
          switch(element.character?.burstType){
            case (BurstType.BURST1[2]) :
              this.burst1.push(element);
              break;
            case (BurstType.BURST2[2]) : 
              this.burst2.push(element);
              break;
            case (BurstType.BURST3[2]) : 
              this.burst3.push(element);
              break;
          }
        });
        // console.log(this.attacker);
        // console.log(this.defender);
        // console.log(this.supporter);
      },
      error: message => alert(message)
    })
  }
  helllo(){
    console.log("heeeeello")
  }
  navigate(r : string){
    this.router.navigateByUrl(r);
  }
}
