import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMinicardDetails } from './character-minicard-details';

describe('CharacterMinicardDetails', () => {
  let component: CharacterMinicardDetails;
  let fixture: ComponentFixture<CharacterMinicardDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterMinicardDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterMinicardDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
