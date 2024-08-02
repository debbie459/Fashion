import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollectionsComponent } from './new-collections.component';

describe('NewCollectionsComponent', () => {
  let component: NewCollectionsComponent;
  let fixture: ComponentFixture<NewCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCollectionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
