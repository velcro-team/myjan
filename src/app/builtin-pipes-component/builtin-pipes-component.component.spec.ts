import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltinPipesComponentComponent } from './builtin-pipes-component.component';

describe('BuiltinPipesComponentComponent', () => {
  let component: BuiltinPipesComponentComponent;
  let fixture: ComponentFixture<BuiltinPipesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuiltinPipesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuiltinPipesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
