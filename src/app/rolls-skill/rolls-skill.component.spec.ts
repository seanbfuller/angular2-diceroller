import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillRollsComponent } from './skill-rolls.component';

describe('SkillRollsComponent', () => {
  let component: SkillRollsComponent;
  let fixture: ComponentFixture<SkillRollsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillRollsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillRollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
