import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  URL = 'https://portfoliobackend-wn7a.onrender.com/' + 'banner/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<banner[]>{
    return this.httpClient.get<banner[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<banner>{
    return this.httpClient.get<banner>(this.URL + `detail/${id}`);
  }

  public save(banner: banner): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', banner);
  }

  public update(id: number, banner: banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, banner);
  }
  }
