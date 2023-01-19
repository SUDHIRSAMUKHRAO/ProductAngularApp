import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProuctComponent } from './create-prouct.component';

describe('CreateProuctComponent', () => {
  let component: CreateProuctComponent;
  let fixture: ComponentFixture<CreateProuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProuctComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProuctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
