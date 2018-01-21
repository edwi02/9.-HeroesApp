import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: []
})
export class HeroesComponent implements OnInit {

  heroes:any [] = [];
  loading:boolean = true;

  constructor(private _heroesService:HeroesService ) {



    this._heroesService.getHeroes()


          .subscribe( data=>{
            //Opción 1
            // for( let key$ in data){
            //   let h = data[key$];
            //   h.key$ = key$;
            //   this.heroes.push( data[key$]);
            // }

            //Opción , con el Pipe (Keys)
            this.heroes = data;
            this.loading = false;
          });

          // console.log( this.heroes );
  }

  ngOnInit() {
  }

  eliminarHeroe( key$:string ){

    this._heroesService.eliminarHeroe(key$)
          .subscribe( respuesta => {

            if( respuesta ){
              console.log(respuesta);
            }else{
              // Todo bien
              delete this.heroes[key$];
            }

          });
  }

}
