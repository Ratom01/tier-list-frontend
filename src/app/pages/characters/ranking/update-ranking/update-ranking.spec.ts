import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRanking } from './update-ranking';

describe('UpdateRanking', () => {
  let component: UpdateRanking;
  let fixture: ComponentFixture<UpdateRanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRanking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRanking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
