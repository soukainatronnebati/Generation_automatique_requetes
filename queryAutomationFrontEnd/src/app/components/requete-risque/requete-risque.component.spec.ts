import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequeteRisqueComponent } from './requete-risque.component';

describe('RequeteRisqueComponent', () => {
  let component: RequeteRisqueComponent;
  let fixture: ComponentFixture<RequeteRisqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RequeteRisqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequeteRisqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
