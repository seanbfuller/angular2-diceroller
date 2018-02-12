
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RollsComponent } from './rolls/rolls.component';
import { RollsService } from './rolls/rolls.service';

class MockService {
  getRolls() {
    return [{
      roll: 10,
      message: 'Test'
    }];
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    let mockService = new MockService();
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      providers: [{provide: RollsService, useValue: mockService }],
      declarations: [
        AppComponent,
        RollsComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Test App');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Test App!');
  }));
});
