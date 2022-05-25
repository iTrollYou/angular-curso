import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})

export class AgregarComponent {

  // A la espera de recibir data
  @Input() personajes: Personaje[] = []

  @Input() nuevo: Personaje = {
    nombre: "",
    poder: 0
  }

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonajes(this.nuevo);

    this.nuevo = {
      nombre: "",
      poder: 0
    }

  }

  constructor(private dbzService: DbzService) { }

}
