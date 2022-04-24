import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivonuevogitComponent } from './archivonuevogit.component';

describe('ArchivonuevogitComponent', () => {
  let component: ArchivonuevogitComponent;
  let fixture: ComponentFixture<ArchivonuevogitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivonuevogitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivonuevogitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
