import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProduitsComponent } from './modif-produits.component';

describe('ModifProduitsComponent', () => {
  let component: ModifProduitsComponent;
  let fixture: ComponentFixture<ModifProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModifProduitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
