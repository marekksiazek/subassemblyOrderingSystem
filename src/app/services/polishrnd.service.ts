import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolishRnDModel } from '../types/polisRnDModel';

@Injectable({
  providedIn: 'root'
})
export class PolishrndService {

  constructor(private http: HttpClient) { }

  getPolishRnDModelsWithAllData(){
    return this.http.get<PolishRnDModel[]>('http://localhost:8080/api/polishRnD')
  }
}
