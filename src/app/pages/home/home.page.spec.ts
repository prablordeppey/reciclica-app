import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PickupCallCardComponent } from 'src/app/components/pickup-call-card/pickup-call-card.component';


import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage, PickupCallCardComponent ],
      imports: [
        IonicModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  }));
  
  it("it should go to pickup-calls page on see all", ()=>{

    spyOn(router, 'navigate');

    component.goToPickupCalls();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  })


  it("it should go to pickup-call page on create pickup call", ()=>{

    spyOn(router, 'navigate');

    component.goToPickupCall();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  })


});
