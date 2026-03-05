import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mini-character-card',
  imports: [],
  templateUrl: './mini-character-card.html',
  styleUrl: './mini-character-card.css',
})
export class MiniCharacterCard {
  @Input() ranking! : Ranking;

  constructor(private router : Router){}

  navigate(r : string){
    this.router.navigateByUrl(r);
  }
}
