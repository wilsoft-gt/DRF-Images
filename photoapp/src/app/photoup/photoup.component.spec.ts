import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoupComponent } from './photoup.component';

describe('PhotoupComponent', () => {
  let component: PhotoupComponent;
  let fixture: ComponentFixture<PhotoupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
