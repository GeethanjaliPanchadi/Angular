import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcardsComponent } from './subcards.component';

describe('SubcardsComponent', () => {
  let component: SubcardsComponent;
  let fixture: ComponentFixture<SubcardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcardsComponent]
    });
    fixture = TestBed.createComponent(SubcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
