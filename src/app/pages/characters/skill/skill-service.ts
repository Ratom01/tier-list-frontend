import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillService {

  private serverUrl = 'http://localhost:8080/skill';

  constructor(private http : HttpClient){}

  getSkillsByCharacterId(characterId : number) : Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.serverUrl}/character/${characterId}`);
  }
  getSkills(id : number) : Observable<Skill>{
    return this.http.get<Skill>(`${this.serverUrl}/all`);
  }
  getSkillById(id : number) : Observable<Skill>{
    return this.http.get<Skill>(`${this.serverUrl}/find/${id}`);
  }
  addSkill(skill : Skill, characterId : number) : Observable<Skill>{
    return this.http.post<Skill>(`${this.serverUrl}/character/${characterId}/add`, skill);
  }
  updateSkill(skill : Skill, characterId : any) : Observable<Skill>{
    return this.http.put<Skill>(`${this.serverUrl}/character/${characterId}/update`, skill);
  }
  deleteSkill(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }
}
