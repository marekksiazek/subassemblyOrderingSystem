import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModelWithAllDataService } from '../../services/model-with-all-data.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModelWithAllData } from '../../types/modelWithAllData';
import { FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { merge } from 'rxjs';
import { Model } from '../../types/model';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-model-with-all-data',
  templateUrl: './model-with-all-data.component.html',
  styleUrl: './model-with-all-data.component.scss'
})




export class ModelWithAllDataComponent implements OnInit {

  value = '';
  public models:ModelWithAllData[];

  public searchForm: FormGroup;


  constructor(private modelWithAllDataServ: ModelWithAllDataService) {};


  @ViewChild('TABLE') table: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  form:FormGroup = new FormGroup({
    modelSuffix: new FormControl(true),
    suffix: new FormControl(true),
    part1: new FormControl(true),
    part2: new FormControl(true),
    part3: new FormControl(true),
    part4: new FormControl(true),
    cbomModelSuffix: new FormControl(true),
    bomSuffix: new FormControl(true),
    bomPart1: new FormControl(true),
    bomPart2: new FormControl(true),
    bomPart3: new FormControl(true),
    bomPart4: new FormControl(true),
    total: new FormControl(true),
    bom: new FormControl(true),
    suffixCompare: new FormControl(true),
    partNoCompare: new FormControl(true),
    rnd: new FormControl(true),
  });



  modelSuffix = this.form.get('modelSuffix');
  suffix = this.form.get('suffix');
  part1 = this.form.get('part1');
  part2 = this.form.get('part2');
  part3 = this.form.get('part3');
  part4 = this.form.get('part4');
  cbomModelSuffix = this.form.get('cbomModelSuffix');
  bomSuffix = this.form.get('bomSuffix');
  bomPart1 = this.form.get('bomPart1');
  bomPart2 = this.form.get('bomPart2');
  bomPart3 = this.form.get('bomPart3');
  bomPart4 = this.form.get('bomPart4');
  total = this.form.get('total');
  bom = this.form.get('bom');
  suffixCompare = this.form.get('suffixCompare');
  partNoCompare = this.form.get('partNoCompare');
  rnd = this.form.get('rnd')

  cbValues;

  columns = [];
  
  columnDefinitions = [
    {def: 'modelSuffix', label: 'Model & suffix', hide: this.modelSuffix.value},
    {def: 'suffix', label: 'Suffix', hide: this.suffix.value},
    {def: 'part1', label: 'Part 1', hide: this.part1.value},
    {def: 'part2', label: 'Part 2', hide: this.part2.value},
    {def: 'part3', label: 'Part 3', hide: this.part3.value},
    {def: 'part4', label: 'Part 4', hide: this.part4.value},
    {def: 'cbomModelSuffix', label: 'C Bom Model Suffix', hide: this.cbomModelSuffix.value},
    {def: 'bomSuffix', label: 'Bom Suffix', hide: this.bomSuffix.value},
    {def: 'bomPart1', label: 'Bom Part 1', hide: this.bomPart1.value},
    {def: 'bomPart2', label: 'Bom Part 2', hide: this.bomPart2.value},
    {def: 'bomPart3', label: 'Bom Part 3', hide: this.bomPart3.value},
    {def: 'bomPart4', label: 'Bom Part 4', hide: this.bomPart4.value},
    {def: 'total', label: 'Total', hide: this.total.value},
    {def: 'bom', label: 'Bom', hide: this.bom.value},
    {def: 'suffixCompare', label: 'Suffix Compare', hide: this.suffixCompare.value},
    {def: 'partNoCompare', label: 'Part No Compare', hide: this.partNoCompare.value},
    {def: 'rnd', label: 'Rnd', hide: this.rnd.value}
  ]

  getDisplayedColumns(){
    this.columns = this.columnDefinitions.filter(cd => cd.hide).map(cd => cd.def);
  }

  
  dataSource: MatTableDataSource<ModelWithAllData>;
 
  ngOnInit(): void{
    this.modelWithAllDataServ.getModelsWithAllData().subscribe((response) => {
      this.models=response;
      this.dataSource = new MatTableDataSource(this.models);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      
    });
    
    let o1:Observable<boolean> = this.modelSuffix.valueChanges;
    let o2:Observable<boolean> = this.suffix.valueChanges;
    let o3:Observable<boolean> = this.part1.valueChanges;
    let o4:Observable<boolean> = this.part2.valueChanges;
    let o5:Observable<boolean> = this.part3.valueChanges;
    let o6:Observable<boolean> = this.part4.valueChanges;
    let o7:Observable<boolean> = this.cbomModelSuffix.valueChanges;
    let o8:Observable<boolean> = this.bomSuffix.valueChanges;
    let o9:Observable<boolean> = this.bomPart1.valueChanges;
    let o10:Observable<boolean> = this.bomPart2.valueChanges;
    let o11:Observable<boolean> = this.bomPart3.valueChanges;
    let o12:Observable<boolean> = this.bomPart4.valueChanges;
    let o13:Observable<boolean> = this.total.valueChanges;
    let o14:Observable<boolean> = this.bom.valueChanges;
    let o15:Observable<boolean> = this.suffixCompare.valueChanges;
    let o16:Observable<boolean> = this.partNoCompare.valueChanges;
    let o17:Observable<boolean> = this.rnd.valueChanges;
    
 
    merge(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17).subscribe( v=>{
    this.columnDefinitions[0].hide = this.modelSuffix.value;
    this.columnDefinitions[1].hide = this.suffix.value;
    this.columnDefinitions[2].hide = this.part1.value; 
    this.columnDefinitions[3].hide = this.part2.value; 
    this.columnDefinitions[4].hide = this.part3.value; 
    this.columnDefinitions[5].hide = this.part4.value; 
    this.columnDefinitions[6].hide = this.cbomModelSuffix.value; 
    this.columnDefinitions[7].hide = this.bomSuffix.value; 
    this.columnDefinitions[8].hide = this.bomPart1.value; 
    this.columnDefinitions[9].hide = this.bomPart2.value; 
    this.columnDefinitions[10].hide = this.bomPart3.value; 
    this.columnDefinitions[11].hide = this.bomPart4.value; 
    this.columnDefinitions[12].hide = this.total.value;
    this.columnDefinitions[13].hide = this.bom.value;
    this.columnDefinitions[14].hide = this.suffixCompare.value;
    this.columnDefinitions[15].hide = this.partNoCompare.value;
    this.columnDefinitions[16].hide = this.rnd.value;
    
  
       this.getDisplayedColumns();
     });
 
    this.getDisplayedColumns();

    }



    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }


    applyFilter2(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filterPredicate = (data: any, filter: string) => {
          return data.bom.toLowerCase().includes(filter);
        };
    }

    showClick(){
      console.log("click click motherfucker")
    }

    sendToPolishRnD(object: Model){
      this.modelWithAllDataServ.putModelToPolishRnD(object.modelSuffix, {
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
        next: () => this.modelWithAllDataServ.getModelsWithAllData().subscribe((response) => {
          this.models = response;
          this.dataSource = new MatTableDataSource(this.models);
        }),
        error: (error) => {
          console.warn(error.message);
          console.log({error});
        }
      })
    }

    sendToKoreaRnD(object: Model){
      this.modelWithAllDataServ.putModelToKoreaRnD(object.modelSuffix, {
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
        next: () => this.modelWithAllDataServ.getModelsWithAllData().subscribe((response) => {
          this.models = response;
          this.dataSource = new MatTableDataSource(this.models);
        }),
        error: (error) => {
          console.warn(error.message);
          console.log({error});
        }
      })
    }

    exportToExcel(){
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
      XLSX.writeFile(wb, 'TableSize.xlsx');
    }

}
