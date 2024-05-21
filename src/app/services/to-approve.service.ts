import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToApproveModel } from '../types/toApprove';
import { Model } from '../types/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToApproveService {

  private getToApproveModelsUrl = 'http://localhost:8080/api/toApproveModel';
  private putWithChangesStatusToApproveUrl = 'http://localhost:8080/api/toApproveModel/aprove';
  private putWithChangesStatusRejectToPolishRnDUrl = 'http://localhost:8080/api/toApproveModel/rejectToPolishRnD';
  private putWithChangesStatusRejectToKoreanRnDUrl = 'http://localhost:8080/api/toApproveModel/rejectToKoreaRnD';

  constructor(private http: HttpClient) { }

  getAllToApproveModels(){
    return this.http.get<ToApproveModel[]>(this.getToApproveModelsUrl);
  }

  putWithChangedStatusApprove(modelSuffix: string, updatedModel: Model): Observable<any> {
    const url = `${this.putWithChangesStatusToApproveUrl}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }

  putWithChangedStatusRejectToPolishRnD(modelSuffix: string, updatedModel: Model): Observable<any> {
    const url = `${this.putWithChangesStatusRejectToPolishRnDUrl}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }

  putWithChangedStatusRejectToKoreaRnD(modelSuffix: string, updatedModel: Model): Observable<any> {
    const url = `${this.putWithChangesStatusRejectToKoreanRnDUrl}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }
}
