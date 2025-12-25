import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginModel } from './login';

describe('Login', () => {
  let component: LoginModel;
  let fixture: ComponentFixture<LoginModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
