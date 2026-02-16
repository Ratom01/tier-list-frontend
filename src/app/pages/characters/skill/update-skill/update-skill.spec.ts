import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSkill } from './update-skill';

describe('UpdateSkill', () => {
  let component: UpdateSkill;
  let fixture: ComponentFixture<UpdateSkill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSkill]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSkill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
