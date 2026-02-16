import { Component, Input } from '@angular/core';

@Component({
  selector: 'mini-character-card',
  imports: [],
  templateUrl: './mini-character-card.html',
  styleUrl: './mini-character-card.css',
})
export class MiniCharacterCard {
  @Input() ranking! : Ranking;
}
