import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  public heroes: string[] = ["Spiderman", "Superman", "Ironman", "Hulk"];
  public heroeBorrado: string = "";


  public borrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || "";
  }

}
