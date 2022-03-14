import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interface/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 70%;
      border-radius: 7px;
      margin: 0 0 0 50px;
    }

    button {
      margin: 0 0 0 15px;
    }
  `]
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroeService: HeroesService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params
        .pipe(
          switchMap(param => this.heroeService.getHeroeById(param.id))
        )
        .subscribe(heroe => this.heroe = heroe);
  }

  regresar() {
    /* Cuando le da clic en regresar, redirecciona al url */
    this.router.navigate(['/heroes/listado']);
  }
}
