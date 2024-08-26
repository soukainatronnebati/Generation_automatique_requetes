import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequeteComponent } from './edit-requete.component';

describe('EditRequeteComponent', () => {
  let component: EditRequeteComponent;
  let fixture: ComponentFixture<EditRequeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRequeteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRequeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
