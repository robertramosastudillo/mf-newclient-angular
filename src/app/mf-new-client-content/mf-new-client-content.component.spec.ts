import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfNewClientContentComponent } from './mf-new-client-content.component';

describe('MfClientContentComponent', () => {
  let component: MfNewClientContentComponent;
  let fixture: ComponentFixture<MfNewClientContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MfNewClientContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MfNewClientContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
