import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListveterinariaComponent } from './listveterinaria.component';

describe('ListveterinariaComponent', () => {
  let component: ListveterinariaComponent;
  let fixture: ComponentFixture<ListveterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListveterinariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListveterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
