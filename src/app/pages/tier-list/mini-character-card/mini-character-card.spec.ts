import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCharacterCard } from './mini-character-card';

describe('MiniCharacterCard', () => {
  let component: MiniCharacterCard;
  let fixture: ComponentFixture<MiniCharacterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniCharacterCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCharacterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
