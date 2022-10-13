import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvetiComponent } from './listveti.component';

describe('ListvetiComponent', () => {
  let component: ListvetiComponent;
  let fixture: ComponentFixture<ListvetiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvetiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListvetiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
