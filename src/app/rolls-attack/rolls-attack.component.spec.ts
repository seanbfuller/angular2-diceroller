import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app.component';
import { RollsAttackComponent } from './rolls-attack.component';
import { RollsService } from '../rolls/rolls.service';

// Create a mock service for RollsService
class MockService {
  getRolls() {
    return [{
      roll: 10,
      message: 'Test'
    }];
  }
}

describe('RollsAttackComponent', () => {
  let component: RollsAttackComponent;
  let fixture: ComponentFixture<RollsAttackComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    // Create an instance of the service
    let mockService = new MockService();
    TestBed.configureTestingModule({
      imports: [ 
        RouterTestingModule, 
        FormsModule 
      ],
      // Add the service as a provider using the mock service
      providers: [{provide: RollsService, useValue: mockService }],
      declarations: [ 
        RollsAttackComponent,
        AppComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollsAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display the number of rolls form element', () => {
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('.form-item'));
    el = de.nativeElement;
    expect(el.textContent).toContain("Number of Rolls:");
  });

});
