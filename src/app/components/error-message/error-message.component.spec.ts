import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormControl, FormGroup } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ErrorMessageComponent } from './error-message.component';

describe('ErrorMessageComponent', () => {
  let component: ErrorMessageComponent;
  let fixture: ComponentFixture<ErrorMessageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorMessageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessageComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // form.get('email')?.touched && form.get('email')?.errors
  it("should show an error message when field touched and error present",()=>{
    component.field = new FormControl();

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anyError';
    
    expect(component.shouldShowComponent()).toBeTruthy();
  })

  // hideError when field not touched
  it("should hide error message on field not touched", ()=>{
    component.field = new FormControl();

    component.field.setErrors({anyError: true});
    component.error = 'anyError';
    
    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it("should hide error message  on field touched, but no errors",()=>{
    component.field = new FormControl();

    component.field.markAsTouched();
    
    expect(component.shouldShowComponent()).toBeFalsy();
  })

  it("should hide error message on field touched and has error, but it is a different error",()=>{
    component.field = new FormControl();

    component.field.markAsTouched();
    component.field.setErrors({anyError: true});
    component.error = 'anotherError';
    
    expect(component.shouldShowComponent()).toBeFalsy();
  })

});
