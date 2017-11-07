import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PonyComponent } from './pony.component';
import {Pony} from "./pony";

describe('PonyComponent', () => {
  let component: PonyComponent;
  let fixture: ComponentFixture<PonyComponent>;
  let pony:Pony = {id:1,name:'fakePony'};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PonyComponent);
    component = fixture.componentInstance;
    component.pony = pony;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have method select pony',()=>{
    expect(component.selectPony).toBeDefined(true);
  });
});
