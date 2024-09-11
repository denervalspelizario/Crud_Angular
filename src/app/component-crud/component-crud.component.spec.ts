import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCrudComponent } from './component-crud.component';

describe('ComponentCrudComponent', () => {
  let component: ComponentCrudComponent;
  let fixture: ComponentFixture<ComponentCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
