import { Injectable } from '@angular/core';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  public listaCliente: Cliente[];

  constructor() {
    this.listaCliente = [{ id: 45, nombre: 'Diego Gomez', email: 'dg@gmail.com' },
    { id: 50, nombre: 'Alvaro Gomez', email: 'ag@gmail.com' },
    { id: 55, nombre: 'Juan Gomez', email: 'jg@gmail.com' },
    { id: 60, nombre: 'David Gomez', email: 'davg@gmail.com' }];
  }

  public findAll(): Cliente[] {
    return this.listaCliente;
  }
}
