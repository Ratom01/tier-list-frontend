import { Component } from '@angular/core';
import { BtnGroup } from '../../btn-group/btn-group';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillService } from '../skill-service';
import { CharactersService } from '../../characters-service';
import { SkillType } from '../../../../../assets/enums/SkillType';

@Component({
  selector: 'app-update-skill',
  imports: [BtnGroup, ReactiveFormsModule, HttpClientModule],
  templateUrl: './update-skill.html',
  providers: [CharactersService, SkillService],
  styleUrl: './update-skill.css',
})
export class UpdateSkill {
  skillTypes = Object.entries(SkillType);
  normal : boolean = true;
  skill : Skill | undefined;
  characterId : number | undefined = 0;
  constructor(private skillService : SkillService, private charactersService : CharactersService,
     private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const id = paramMap.get("skillId");
      const characterId = paramMap.get("characterId");
      if(characterId){
        this.characterId = Number(characterId);
      }
      if(id){
        //this.id = Number(id);
        this.skillService.getSkillById(Number(id)).subscribe({
          next : data => {
            this.skill = data;
            //console.log(data);
             this.updateSkillForm.patchValue({
              id: this.skill.id as number,
              name: this.skill.name as string,
              type: this.skill.type as string,
              active: this.skill.active as boolean,
              description: this.skill.description as string,
              ammo: this.skill.ammo as number,
              reloadTime: this.skill.reloadTime as number,
              cooldown: this.skill.cooldown as number
            });
          },
          error : message => alert(message)
        })
      }
    })
    
  }

  updateSkillForm  = new FormGroup({
    "id" : new FormControl(0, {nonNullable : true, validators : [Validators.required]}),
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
    this.updateSkillForm.get(type)?.setValue(value);
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

  updateSkill(){
    this.skillService.updateSkill(this.updateSkillForm.getRawValue() as Skill, this.characterId).subscribe({
      next : data => {
        this.navigate(`/characters/${this.characterId}`);
      },
      error : message => alert(message)
    })
  }
}
