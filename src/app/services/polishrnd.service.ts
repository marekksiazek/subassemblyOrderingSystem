import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PolishRnDModel } from '../types/polisRnDModel';
import { Observable } from 'rxjs';
import { Model } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class PolishrndService {

  private getPolishRnDUrl = 'http://localhost:8080/api/polishRnD';
  private putWithChangedStatus = 'http://localhost:8080/api/polishRnD';

  constructor(private http: HttpClient) { }

  getPolishRnDModelsWithAllData(){
    return this.http.get<PolishRnDModel[]>(this.getPolishRnDUrl)
  }

  putPolishRnDWithChangedStatus(modelSuffix: string, updatedModel: Model): Observable <any>{
    const url = `${this.putWithChangedStatus}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }


}
