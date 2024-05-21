import { Component, OnInit, ViewChild } from '@angular/core';
import { KoreaRnDModel } from '../../types/koreaRnDModels';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KorearndService } from '../../services/korearnd.service';
import { MatDialog } from '@angular/material/dialog';
import { Model } from '../../types/model';

@Component({
  selector: 'app-korearnd',
  templateUrl: './korearnd.component.html',
  styleUrl: './korearnd.component.scss'
})
export class KorearndComponent implements OnInit{
  
  public models: KoreaRnDModel[];
  public rndForm: FormGroup;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['modelSuffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'cbomModelSuffix', 'bomSuffix', 'bomPart1', 'bomPart2', 'bomPart3', 'bomPart4', 'actions'];

  dataSource: MatTableDataSource<KoreaRnDModel>;

  constructor(private koreanRnDServ: KorearndService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.koreanRnDServ.getKoreaRnDModelsWithAllData().subscribe((response) => {
      this.models = response;
      this.dataSource = new MatTableDataSource(this.models);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  doneSubmit(object: Model){
    this.koreanRnDServ.putKoreaRnDWithChangedStatus(object.modelSuffix, {
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
      next: () => this.koreanRnDServ.getKoreaRnDModelsWithAllData().subscribe((response) => {
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
