import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToExportData } from '../types/toExport';

@Injectable({
  providedIn: 'root'
})
export class ToExportDataService {

  constructor(private http: HttpClient) { }

  getToExportData(){
    return this.http.get<ToExportData[]>('http://localhost:8080/api/filteredData');
  }
}