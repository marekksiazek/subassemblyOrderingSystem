import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KoreaRnDModel } from '../types/koreaRnDModels';
import { Model } from '../types/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KorearndService {

  private getKoreaRnDUrl = 'http://localhost:8080/api/koreaRnD';
  private putWithChangedStatus = 'http://localhost:8080/api/koreaRnD';

  constructor(private http: HttpClient) { }

  getKoreaRnDModelsWithAllData(){
    return this.http.get<KoreaRnDModel[]>(this.getKoreaRnDUrl);
  }

  putKoreaRnDWithChangedStatus(modelSuffix: string, updatedModel: Model): Observable <any>{
    const url = `${this.putWithChangedStatus}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }



}
