import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatternOperatorComponent } from './flattern-operator.component';

describe('FlatternOperatorComponent', () => {
  let component: FlatternOperatorComponent;
  let fixture: ComponentFixture<FlatternOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatternOperatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatternOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
