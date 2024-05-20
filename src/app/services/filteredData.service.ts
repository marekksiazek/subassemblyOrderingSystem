import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdData } from '../types/prodData';


@Injectable({
  providedIn: 'root'
})
export class FilteredDataService {

  constructor(private http: HttpClient) { }

  getFilteredProdData(){
    return this.http.get<ProdData[]>('http://localhost:8080/api/prodData/filtered');
  }

}