import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDomaineComponent } from './act-domaine.component';

describe('ActDomaineComponent', () => {
  let component: ActDomaineComponent;
  let fixture: ComponentFixture<ActDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActDomaineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
