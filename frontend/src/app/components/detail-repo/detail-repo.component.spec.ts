import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRepoComponent } from './detail-repo.component';

describe('DetailRepoComponent', () => {
  let component: DetailRepoComponent;
  let fixture: ComponentFixture<DetailRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
