import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdData } from '../../types/prodData';
import { MatTableDataSource } from '@angular/material/table';
import { ProdDataService } from '../../services/prod-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-production-data',
  templateUrl: './production-data.component.html',
  styleUrl: './production-data.component.scss'
})
export class ProductionDataComponent implements OnInit{

  displayedColumns: string[] = ['workorder', 'model', 'suffix', 'day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7', 'day8', 'day9', 'day10', 'day11', 'day12', 'day13', 'day14', 'day15', 'day16', 'total', 'shortSuffix'];
  dataSource: MatTableDataSource<ProdData>;

  constructor (private prodDataServ: ProdDataService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {
   this.prodDataServ.getProdData().subscribe((response) => {
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
