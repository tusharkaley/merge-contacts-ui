import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsComponent } from './user-contacts.component';

describe('UserContactsComponent', () => {
  let component: UserContactsComponent;
  let fixture: ComponentFixture<UserContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});