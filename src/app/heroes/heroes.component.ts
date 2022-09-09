import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';

@Component({
  selector: 'app-heroes', //<app-heroes></app-heroes>, colocamos esse componente lá no arquivo "app.component.html"
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {//export para usar em outros lugares como no app.modules.ts
  hero: Hero = {//hero vai ser do tipo Hero, e podemos usar esse "hero" em nosso template
    id: 1,
    name: 'Windstorm'
  }

  constructor() { }

  ngOnInit(): void {//here is good place to put logic
  }

}
