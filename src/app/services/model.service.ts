import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Model } from '../types/model';


@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(private http: HttpClient) { }

  getModels(){
    return this.http.get<Model[]>('http://localhost:8080/api/models');
  }

}
