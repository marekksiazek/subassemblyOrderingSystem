import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ModelWithAllData } from '../types/modelWithAllData';
import { Observable } from 'rxjs';
import { Model } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class ModelWithAllDataService {

  private getAllModelUrl = 'http://localhost:8080/api/modelWithAllData';
  private putModelToPolishRnDUrl = 'http://localhost:8080/api/modelWithAllData/done';

  constructor(private http: HttpClient) { }

  getModelsWithAllData(){
    return this.http.get<ModelWithAllData[]>(this.getAllModelUrl)
  }

  putModelToPolishRnD(modelSuffix: string, updatedModel: Model): Observable <any>{
    const url = `${this.putModelToPolishRnDUrl}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }
}
