import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpComponent } from './gp.component';

describe('GpComponent', () => {
  let component: GpComponent;
  let fixture: ComponentFixture<GpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
