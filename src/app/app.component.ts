import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuoteSimpsonService } from 'src/services/quote-simpson.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  serviceSubscription!: Subscription;
  quote!: string;
  imageUrl!: string;
  character!: string;

  constructor( private quoteSimpsonService: QuoteSimpsonService){}

  // abonnement a l'appel de l'api + init de l'observer (next, error, complete)
  ngOnInit (): void {
    this.serviceSubscription = this.quoteSimpsonService.getQuote().subscribe(
      (param: any) => {
          this.quote  =  param.quote;
          this.imageUrl = param.image;
          this.character = param.character;
      },
      (error :any) => {
        console.log(`une erreur a été rencontrée ${error}`)
      },
      () => {
        console.log('Observable complètée')
      }
  );

  }

  // desabonnement de l'appel de l'API (evite les boucles infinits)
  ngOnDestroy(){
    this.serviceSubscription.unsubscribe();
  }
}
