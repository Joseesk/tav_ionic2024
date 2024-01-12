import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DocentePaginaPage } from './docente-pagina.page';

describe('DocentePaginaPage', () => {
  let component: DocentePaginaPage;
  let fixture: ComponentFixture<DocentePaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DocentePaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
