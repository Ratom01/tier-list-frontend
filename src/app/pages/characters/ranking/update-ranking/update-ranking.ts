import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { RankingService } from '../ranking-service';
import { BtnGroup } from '../../btn-group/btn-group';
import { HttpClientModule } from '@angular/common/http';
import { RankType } from '../../../../../assets/enums/RankType';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-ranking',
  imports: [HttpClientModule, BtnGroup, ReactiveFormsModule],
  templateUrl: './update-ranking.html',
  providers: [RankingService],
  styleUrl: './update-ranking.css',
})
export class UpdateRanking implements OnInit{

  characterId !: number;
  ranking !: Ranking;

  rankingTypes = Object.entries(RankType);


  constructor(private route : ActivatedRoute, private rankingService : RankingService, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get("id");
      if(id){
        this.characterId = Number(id);
        this.rankingService.getRankingsByCharacterId(Number(id)).subscribe({
          next: data => {
            this.ranking = data;
            this.updateRankingForm.patchValue({
              rankImgUrl : this.ranking.rankImgUrl as string,
              story: this.ranking.story as string,
              boss: this.ranking.boss as string,
              pvp: this.ranking.pvp as string
            });
          },
          error: message => alert (message)
        })
      }
    })
  }

  updateRankingForm = new FormGroup({
    "rankImgUrl" : new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    "story" : new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    "boss" : new FormControl('', {nonNullable: true, validators: [Validators.required]}),
    "pvp" : new FormControl('', {nonNullable: true, validators: [Validators.required]}),
  })

  selectType(value: string, type: string) {
    this.updateRankingForm.get(type)?.setValue(value);
  }

  updateRanking(){
    this.rankingService.updateRanking(this.updateRankingForm.getRawValue() as Ranking, this.characterId).subscribe({
      next : data => {
        console.log(data),
        this.router.navigate(['/characters/', this.characterId]);
      },
      error : message => alert(message)
    })
  }


}
