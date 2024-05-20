import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelWithAllData } from '../types/modelWithAllData';

@Injectable({
  providedIn: 'root'
})
export class ModelWithAllDataService {

  constructor(private http: HttpClient) { }

  getModelsWithAllData(){
    return this.http.get<ModelWithAllData[]>('http://localhost:8080/api/modelWithAllData')
  }
}
