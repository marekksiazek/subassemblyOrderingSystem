import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToapproveComponent } from './toapprove.component';

describe('ToapproveComponent', () => {
  let component: ToapproveComponent;
  let fixture: ComponentFixture<ToapproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToapproveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToapproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
