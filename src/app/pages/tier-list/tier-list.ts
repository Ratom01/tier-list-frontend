import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters/characters-service';
import { RankingService } from '../characters/ranking/ranking-service';
import { HttpClientModule } from '@angular/common/http';
import { AttackType } from '../../../assets/enums/AttackType';
import { RankType } from '../../../assets/enums/RankType';
import { NgForOf, NgIf } from "@angular/common";
import { MiniCharacterCard } from './mini-character-card/mini-character-card';

@Component({
  selector: 'app-tier-list',
  imports: [HttpClientModule, NgForOf, NgIf, MiniCharacterCard],
  templateUrl: './tier-list.html',
  providers: [CharactersService, RankingService],
  styleUrl: './tier-list.css',
})
export class TierList implements OnInit{

  attacker : Ranking[] = [];
  defender : Ranking[] = [];
  supporter : Ranking[] = [];

  rankTypes = Object.entries(RankType);

  constructor(private characterService : CharactersService, private rankingService : RankingService){}

  ngOnInit(): void {
    this.rankingService.getAllRanking().subscribe({
      next: data => {
        data.forEach(element => {
          //console.log(element['story'] == this.rankTypes[1][0]);
          switch(element.character?.attackType){
            case (AttackType.ATTACKER[1]) :
              this.attacker.push(element);
              break;
            case (AttackType.DEFENDER[1]) : 
              this.defender.push(element);
              break;
            case (AttackType.SUPPORTER[1]) : 
              this.supporter.push(element);
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
}
