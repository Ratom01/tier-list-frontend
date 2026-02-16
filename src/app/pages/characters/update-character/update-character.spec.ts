import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCharacter } from './update-character';

describe('UpdateCharacter', () => {
  let component: UpdateCharacter;
  let fixture: ComponentFixture<UpdateCharacter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCharacter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCharacter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
