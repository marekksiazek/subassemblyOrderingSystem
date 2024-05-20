import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProdData } from '../../types/prodData';
import { FilteredDataService } from '../../services/filteredData.service';



@Component({
  selector: 'app-filtered-data',
  templateUrl: './filtered-data.component.html',
  styleUrl: './filtered-data.component.scss'
})
export class FilteredDataComponent implements OnInit{

  displayedColumns: string[] = ['modelSuffix', 'week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13', 'week14', 'week15', 'week16', 'total', 'bom'];
  dataSource: MatTableDataSource<ProdData>;

  constructor(private filteredDataService: FilteredDataService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;



  ngOnInit(): void {
    this.filteredDataService.getFilteredProdData().subscribe((response) => {
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
