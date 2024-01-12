import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPaginaPage } from './alumno-pagina.page';

describe('AlumnoPaginaPage', () => {
  let component: AlumnoPaginaPage;
  let fixture: ComponentFixture<AlumnoPaginaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AlumnoPaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
