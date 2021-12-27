import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNewTweetsComponent } from './post-new-tweets.component';

describe('PostNewTweetsComponent', () => {
  let component: PostNewTweetsComponent;
  let fixture: ComponentFixture<PostNewTweetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNewTweetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNewTweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
