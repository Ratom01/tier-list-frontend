import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters-service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgForOf, NgIf } from "@angular/common";
import { SkillService } from '../skill/skill-service';
import { RankingService } from '../ranking/ranking-service';
import { RankType } from '../../../../assets/enums/RankType';

@Component({
  selector: 'app-character-detail',
  imports: [HttpClientModule, NgForOf, NgIf],
  templateUrl: './character-detail.html',
  providers : [CharactersService, SkillService, RankingService],
  styleUrl: './character-detail.css',
})
export class CharacterDetail implements OnInit{
  character : Character | undefined;
  selectedDiv = 'profile-div';
  skills : Skill[] = [];
  ranking : Ranking | undefined;

  rankType = Object.entries(RankType);

  constructor(private charactersService : CharactersService, private skillService : SkillService,
    private rankingService : RankingService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get("id");
      if(id){
        this.charactersService.getCharacterById(Number(id)).subscribe({
          next : data => this.character = data,
          error : message => console.log(message)
        });
        this.skillService.getSkillsByCharacterId(Number(id)).subscribe({
          next : data => this.skills = data,
          error : message => console.log(message)
        });
        this.rankingService.getRankingsByCharacterId(Number(id)).subscribe({
          next : data => this.ranking = data,
          error : message => console.log(message)
        })
      }
    });
    
  }

  deleteCharacter(id : any){
    this.charactersService.deleteCharacter(id).subscribe({
      next : data => this.router.navigate(["/characters"]),
      error : message => alert(message)
    })
  }
  navigate(route : string){
    this.router.navigate([route]);
  }

}
