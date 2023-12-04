import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDashComponent } from './posts-dash.component';

describe('PostsDashComponent', () => {
  let component: PostsDashComponent;
  let fixture: ComponentFixture<PostsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
