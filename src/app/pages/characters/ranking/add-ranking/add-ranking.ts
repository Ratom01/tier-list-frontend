import { Component, Input, OnInit } from '@angular/core';
import { BtnGroup } from '../../btn-group/btn-group';
import { RankType } from '../../../../../assets/enums/RankType';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RankingService } from '../ranking-service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-ranking',
  imports: [BtnGroup, ReactiveFormsModule, FormsModule, HttpClientModule],
  templateUrl: './add-ranking.html',
  providers : [RankingService],
  styleUrl: './add-ranking.css',
})
export class AddRanking implements OnInit{
  rankingTypes = Object.entries(RankType);
  characterId! : number;

  constructor(private rankingService : RankingService, private router : Router, private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) =>{
      const id = param.get("id");
      if(id){
        this.characterId = Number(id);
      }
    })
  }

  addRankingForm = new FormGroup({
    "rankImgUrl" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "story" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "boss" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "pvp" : new FormControl('', {nonNullable : true, validators : [Validators.required]})
  });

  selectType(value: string, type: string) {
    this.addRankingForm.get(type)?.setValue(value);
  }

  createRanking(){
    this.rankingService.addRanking(this.addRankingForm.getRawValue() as Ranking, this.characterId).subscribe({
      next : data => {
        console.log(data),
        this.router.navigate(['/characters/', this.characterId]);
      },
      error : message => alert(message)
    })
  }

}
