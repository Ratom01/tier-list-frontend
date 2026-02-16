import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnGroup } from './btn-group';

describe('BtnGroup', () => {
  let component: BtnGroup;
  let fixture: ComponentFixture<BtnGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
