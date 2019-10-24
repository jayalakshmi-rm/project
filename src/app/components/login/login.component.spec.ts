import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {UserServiceService} from '../user-service.service';
import {SharedeventService} from '../sharedevent.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule],
      providers: [
        UserServiceService, SharedeventService,
        {provide: Router, useClass: class { navigate = (param) => { }; }}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard on success', inject([Router], (router: Router) => {
    const nav = spyOn(router, 'navigate');
    fixture.detectChanges();
    component.user.username = 'user';
    component.user.password = 'user1';
    component.addUser();
    const navArgs = nav.calls.first().args[0];
    expect(navArgs).toEqual(['dashboard']);
  }));
});
