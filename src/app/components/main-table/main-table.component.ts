import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Model } from '../../types/model';
import { ModelService } from '../../services/model.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrl: './main-table.component.scss'
})
export class MainTableComponent implements  OnInit{

  displayedColumns: string[] = ['model_suffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'c_bom_model_suffix', 'bom_suffix', 'bom_part1', 'bom_part2', 'bom_part3', 'bom_part4'];
  dataSource: MatTableDataSource<Model>;

  constructor(private modelServ: ModelService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void{
    this.modelServ.getModels().subscribe((response) => {
      console.log(response);
      this.dataSource = new MatTableDataSource(response);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
