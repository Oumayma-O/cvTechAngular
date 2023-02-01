import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUnsbscribeComponent } from './test-unsbscribe.component';

describe('TestUnsbscribeComponent', () => {
  let component: TestUnsbscribeComponent;
  let fixture: ComponentFixture<TestUnsbscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUnsbscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestUnsbscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
