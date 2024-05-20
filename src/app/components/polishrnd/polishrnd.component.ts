import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PolishrndService } from '../../services/polishrnd.service';
import { MatTableDataSource } from '@angular/material/table';
import { PolishRnDModel } from '../../types/polisRnDModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Model } from '../../types/model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-polishrnd',
  templateUrl: './polishrnd.component.html',
  styleUrl: './polishrnd.component.scss'
})
export class PolishrndComponent implements OnInit{

  public rndForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['modelSuffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'cbomModelSuffix', 'bomSuffix', 'bomPart1', 'bomPart2', 'bomPart3', 'bomPart4', 'actions'];

  dataSource: MatTableDataSource<PolishRnDModel>;


  constructor(private polishrndServ: PolishrndService) {}


  ngOnInit(): void {
    this.polishrndServ.getPolishRnDModelsWithAllData().subscribe((response) =>{
      console.log(response)
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }




}
