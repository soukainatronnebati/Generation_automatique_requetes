import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReqProdComponent } from './new-req-prod.component';

describe('NewReqProdComponent', () => {
  let component: NewReqProdComponent;
  let fixture: ComponentFixture<NewReqProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewReqProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewReqProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
