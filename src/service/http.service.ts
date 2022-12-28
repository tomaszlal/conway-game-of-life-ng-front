import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cell } from 'src/model/model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getListCells(): Observable<Array<Cell>> {
    return this.http.get<Array<Cell>>(this.apiUrl + "/listcells");
  }

  updateListCells(listCells: Array<Cell>): Observable<Array<Cell>> {
    return this.http.post<Array<Cell>>(this.apiUrl + "/updatelist", listCells);
  }

  nextGameTurn() :  Observable<Array<Cell>> {
    return this.http.get<Array<Cell>>(this.apiUrl + "/nextgameturn");
  }

  changSizeBoard(size:number):Observable<Array<Cell>> {
    return this.http.get<Array<Cell>>(this.apiUrl+"/generate/"+size);
  }
}
