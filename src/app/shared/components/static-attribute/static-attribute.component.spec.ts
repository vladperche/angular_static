import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAttributeComponent } from './static-attribute.component';

describe('StaticAttributeComponent', () => {
  let component: StaticAttributeComponent;
  let fixture: ComponentFixture<StaticAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticAttributeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
