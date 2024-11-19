import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaDeputadosComponent } from './busca-deputados.component';

describe('BuscaDeputadosComponent', () => {
  let component: BuscaDeputadosComponent;
  let fixture: ComponentFixture<BuscaDeputadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscaDeputadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaDeputadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
