import { Component, OnInit, ViewChild } from '@angular/core';
import { ToExportData } from '../../types/toExport';
import { ToExportDataService } from '../../services/toExportData.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-to-export-data',
  templateUrl: './to-export-data.component.html',
  styleUrl: './to-export-data.component.scss'
})
export class ToExportDataComponent implements OnInit{

  displayedColumns: string[] = ['model_suffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'c_bom_model_suffix', 'bom_suffix', 'bom_part1', 'bom_part2', 'bom_part3', 'bom_part4', 'bom'];
  dataSource: MatTableDataSource<ToExportData>;

  constructor(private toExportDataService: ToExportDataService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.toExportDataService.getToExportData().subscribe((response) => {
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
