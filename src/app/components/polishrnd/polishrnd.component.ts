import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PolishrndService } from '../../services/polishrnd.service';
import { MatTableDataSource } from '@angular/material/table';
import { PolishRnDModel } from '../../types/polisRnDModel';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Model } from '../../types/model';
import { Observable } from 'rxjs';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { DialogFormPolishRnDComponent } from './dialog-form-polish-rn-d/dialog-form-polish-rn-d.component';

@Component({
  selector: 'app-polishrnd',
  templateUrl: './polishrnd.component.html',
  styleUrl: './polishrnd.component.scss'
})
export class PolishrndComponent implements OnInit{
  public models: PolishRnDModel[];
  public rndForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['modelSuffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'cbomModelSuffix', 'bomSuffix', 'bomPart1', 'bomPart2', 'bomPart3', 'bomPart4', 'actions'];

  dataSource: MatTableDataSource<PolishRnDModel>;


  constructor(private polishrndServ: PolishrndService, public dialog: MatDialog) {}


  ngOnInit(): void {
    this.polishrndServ.getPolishRnDModelsWithAllData().subscribe((response) =>{
      this.models = response;
      this.dataSource = new MatTableDataSource(this.models);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }

  doneSubmit(object: Model){
    this.polishrndServ.putPolishRnDWithChangedStatus(object.modelSuffix, {
      modelSuffix: object.modelSuffix,
      suffix: object.suffix,
      part1: object.part1,
      part2: object.part2,
      part3: object.part3,
      part4: object.part4,
      cbomModelSuffix: object.cbomModelSuffix,
      bomSuffix: object.bomSuffix,
      bomPart1: object.bomPart1,
      bomPart2: object.bomPart2,
      bomPart3: object.bomPart3,
      bomPart4: object.bomPart4
    }).subscribe({
      next: () => this.polishrndServ.getPolishRnDModelsWithAllData().subscribe((response) => {
        this.models = response;
        this.dataSource = new MatTableDataSource(this.models);
      }),
      error: (error) => {
        console.warn(error.message)
        console.log({error})
      }}
      )
    
  }
}
