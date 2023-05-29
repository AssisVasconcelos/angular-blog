import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent {
  photoCover: string =
    'https://colunaboraviajar.com.br/wp-content/uploads/2023/05/Cena-deletada-de-Iron-Man-e-tao-vergonhosa-que-nunca-sera-lancada-diz-produtor.jpg';
  cardTitle: string = 'NOVO HOMEM DE FERRO ANUNCIADO';
  cardDescription: string =
    'Marvel studios anuncia novo filme do homem de ferro.';
}
