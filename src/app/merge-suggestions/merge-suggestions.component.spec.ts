import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeSuggestionsComponent } from './merge-suggestions.component';

describe('MergeSuggestionsComponent', () => {
  let component: MergeSuggestionsComponent;
  let fixture: ComponentFixture<MergeSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
