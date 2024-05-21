import { Component, OnInit, ViewChild } from '@angular/core';
import { ToApproveModel } from '../../types/toApprove';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToApproveService } from '../../services/to-approve.service';
import { MatDialog } from '@angular/material/dialog';
import { Model } from '../../types/model';

@Component({
  selector: 'app-to-approve-models',
  templateUrl: './to-approve-models.component.html',
  styleUrl: './to-approve-models.component.scss'
})
export class ToApproveModelsComponent implements OnInit{

  public models: ToApproveModel[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['modelSuffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'cbomModelSuffix', 'bomSuffix', 'bomPart1', 'bomPart2', 'bomPart3', 'bomPart4', 'approve', 'rejectToPolishRnD', 'rejectToKoreaRnD'];

  dataSource: MatTableDataSource<ToApproveModel>

  constructor(private toApproveModelServ: ToApproveService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.toApproveModelServ.getAllToApproveModels().subscribe((response) => {
      this.models = response;
      this.dataSource = new MatTableDataSource(this.models);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  approveSubmit(object: Model){
    this.toApproveModelServ.putWithChangedStatusApprove(object.modelSuffix, {
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
      next: () => this.toApproveModelServ.getAllToApproveModels().subscribe((response) => {
        this.models = response;
        this.dataSource = new MatTableDataSource(this.models);
      }),
      error: (error) => {
        console.warn(error.message)
        console.log({error})
      }}
      )
  }

  rejectToPolishRnD(object: Model){
    this.toApproveModelServ.putWithChangedStatusRejectToPolishRnD(object.modelSuffix, {
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
      next: () => this.toApproveModelServ.getAllToApproveModels().subscribe((response) => {
        this.models = response;
        this.dataSource = new MatTableDataSource(this.models);
      }),
      error: (error) => {
        console.warn(error.message)
        console.log({error})
      }}
      )
  }

  rejectToKoreaRnD(object: Model) {
    this.toApproveModelServ.putWithChangedStatusRejectToKoreaRnD(object.modelSuffix, {
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
      next: () => this.toApproveModelServ.getAllToApproveModels().subscribe((response) => {
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
