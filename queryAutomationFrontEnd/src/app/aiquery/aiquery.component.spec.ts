import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIQueryComponent } from './aiquery.component';

describe('AIQueryComponent', () => {
  let component: AIQueryComponent;
  let fixture: ComponentFixture<AIQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AIQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AIQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
