import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRanking } from './add-ranking';

describe('AddRanking', () => {
  let component: AddRanking;
  let fixture: ComponentFixture<AddRanking>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRanking]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRanking);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
