import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { SkillType } from '../../../../../assets/enums/SkillType';
import { HttpClientModule } from '@angular/common/http';
import { NgForOf } from "@angular/common";
import { BtnGroup } from '../../btn-group/btn-group';
import { SkillService } from '../skill-service';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from '../../characters-service';

@Component({
  selector: 'add-skill',
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, NgForOf, BtnGroup],
  templateUrl: './add-skill.html',
  providers: [CharactersService, SkillService],
  styleUrl: './add-skill.css',
})
export class AddSkill implements OnInit{
  skillTypes = Object.entries(SkillType);
  normal : boolean = true;
  characterId : number = 0;
  constructor(private skillService : SkillService, private charactersService : CharactersService,
     private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get("id");
      if(id){
        // this.charactersService.getCharacterById(Number(id)).subscribe({
        //   next : data => {
        //     if(data){
        //       this.addSkillForm.get("character")?.setValue(data);
        //       //console.log(this.addSkillForm.get("character"));
        //     }
        //   },
        //   error : message => alert(message)
        // });
        this.characterId = Number(id);
      }
    })
    
  }

  addSkillForm  = new FormGroup({
    "name" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    //"character" : new FormControl({}, {nonNullable : true}),
    "type" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "active" : new FormControl(false, {nonNullable : true, validators : [Validators.required]}),
    "description" : new FormControl('', {nonNullable : true, validators : [Validators.required]}),
    "ammo" : new FormControl(0, {}),
    "reloadTime" : new FormControl(0, {}),
    "cooldown" : new FormControl(0, {}),
  });

  selectType(value: string, type: string) {
    this.addSkillForm.get(type)?.setValue(value);
    //console.log(this.addSkillForm);
    if(value === "NORMAL"){
      this.normal = true;
    }else{
      this.normal = false;
    }
  }

  navigate(r : string){
    this.router.navigate([r]);
  }

  addSkill(){
    this.skillService.addSkill(this.addSkillForm.getRawValue() as Skill, this.characterId).subscribe({
      next : data => {
        this.navigate(`/characters/${this.characterId}`);
      },
      error : message => alert(message)
    })
  }
}
