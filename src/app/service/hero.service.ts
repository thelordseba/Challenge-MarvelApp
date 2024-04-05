import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';
import { UrlKeys } from '../model/urlkeys.enum';
import { MarvelResponse } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {}

  getAllHeroes(): Observable<MarvelResponse> {  
    const ts = new Date().getTime();
    const hash = CryptoJS.MD5(ts + UrlKeys.privateKey + UrlKeys.publicKey).toString(); 

    return this.http.get<MarvelResponse>(
      `${environment.hostMarvel}v1/public/characters?ts=${ts}&apikey=${UrlKeys.publicKey}&hash=${hash}`
      );
  }
  
}

