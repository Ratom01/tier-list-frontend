import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private serverUrl = 'http://localhost:8080';

  constructor(private http : HttpClient){}

  loadCharacters(filter ?: Filter) : Observable<Character[]>{
    let params = new HttpParams();

    // if (filter) {
    //   Object.keys(filter).forEach(key => {
    //     const value = filter[key as keyof Filter];
    //     if (value != null) {
    //       params = params.set(key, value);
    //     }
    //   });
    // }

    //return this.http.get<Character[]>(`${this.serverUrl}/character/all`, { params });
    return this.http.post<Character[]>(`${this.serverUrl}/character/all`, filter);
  }

  addCharacter(character : Character) : Observable<Character>{
    return this.http.post<Character>(`${this.serverUrl}/character/add`, character);
  }
  getCharacterById(id : number) : Observable<Character>{
    return this.http.get<Character>(`${this.serverUrl}/character/find/${id}`);
  }
  updateCharacter(character : Character) : Observable<Character>{
    return this.http.put<Character>(`${this.serverUrl}/character/update`, character);
  }
  deleteCharacter(id : number) : Observable<void>{
    return this.http.delete<void>(`${this.serverUrl}/character/delete/${id}`);
  }
}
