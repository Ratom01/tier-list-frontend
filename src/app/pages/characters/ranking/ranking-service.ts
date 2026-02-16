import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RankingService {

  private serverUrl = 'http://localhost:8080/ranking';

  constructor(private http : HttpClient){}


  getAllRanking() : Observable<Ranking[]>{
    return this.http.get<Ranking[]>(`${this.serverUrl}/all`);
  }
  getRankingsByCharacterId(characterId : number) : Observable<Ranking>{
    return this.http.get<Ranking>(`${this.serverUrl}/character/${characterId}`)
  }
  addRanking(ranking : Ranking, characterId : number) : Observable<Ranking>{
    return this.http.post<Ranking>(`${this.serverUrl}/character/${characterId}/add`, ranking);
  }
  updateRanking(ranking : Ranking, characterId : number) : Observable<Ranking>{
    return this.http.put<Ranking>(`${this.serverUrl}/character/${characterId}/update`, ranking);
  }
  deleteRanking(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/delete/${id}`);
  }

}
