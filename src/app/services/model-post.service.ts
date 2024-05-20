import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Model } from '../types/model';

@Injectable({
  providedIn: 'root'
})
export class ModelPostService {

  private apiPost = 'http://localhost:8080/api/createModels';
  private apiGetItem = 'http://localhost:8080/api/models';
  private apiUpdate = 'http://localhost:8080/api/updateModel';

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.apiPost, input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if(response){
            return response;
          }
        },
        (error:any) => {
          return error;
        }
      )
    )
  }


  PostUpdate(modelSuffix:string, updatedModel: Model ): Observable<any>{
    const url = `${this.apiUpdate}/${modelSuffix}`;
    return this.http.put(url, updatedModel);
  }

  GetModelByModel(modelSuffix: string): Observable <any> {
    const url = `${this.apiGetItem}/${modelSuffix}`;
    return this.http.get(url);
  }
}
