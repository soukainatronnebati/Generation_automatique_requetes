import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqProdComponent } from './req-prod.component';

describe('ReqProdComponent', () => {
  let component: ReqProdComponent;
  let fixture: ComponentFixture<ReqProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReqProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReqProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
