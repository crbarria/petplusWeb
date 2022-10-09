import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListanimalComponent } from './listanimal.component';

describe('ListanimalComponent', () => {
  let component: ListanimalComponent;
  let fixture: ComponentFixture<ListanimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListanimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListanimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
