import { Injectable } from  '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

@Injectable({providedIn:  'root'})

export  class  QuoteSimpsonService {

    private  _service:  HttpClient;

    constructor(param_service:  HttpClient) {
        this._service  =  param_service;
    }


    public  getQuote():  Observable<object> {
        const  $simpsonsQuote:Observable<any> = this._service.get("https://simpsons-quotes-api.herokuapp.com/quotes");
        const  treatment  = ( param_data: any[]) => {
            return  param_data[0]  as  object;
        };
        console.log('api')
        return  $simpsonsQuote.pipe( map( treatment) );
    }
}