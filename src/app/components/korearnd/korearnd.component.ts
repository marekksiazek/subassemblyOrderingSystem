import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { KoreaRnDModel } from '../../types/koreaRnDModels';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { KorearndService } from '../../services/korearnd.service';
import { MatDialog } from '@angular/material/dialog';
import { Model } from '../../types/model';
import { DialogFormKoreaRndComponent } from './dialog-form-korea-rnd/dialog-form-korea-rnd.component';
import * as XLSX from 'xlsx';
import { Observable, merge } from 'rxjs';

@Component({
  selector: 'app-korearnd',
  templateUrl: './korearnd.component.html',
  styleUrl: './korearnd.component.scss'
})
export class KorearndComponent implements OnInit{
  
  public models: KoreaRnDModel[];
  public rndForm: FormGroup;

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
    actions: new FormControl(true),
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
  actions = this.form.get('actions')

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
    {def: 'actions', label: 'Actions', hide: this.actions.value}
  ]

  getDisplayedColumns(){
    this.columns = this.columnDefinitions.filter(cd => cd.hide).map(cd => cd.def);
  }

  // displayedColumns: string[] = ['modelSuffix', 'suffix', 'part1', 'part2', 'part3', 'part4', 'cbomModelSuffix', 'bomSuffix', 'bomPart1', 'bomPart2', 'bomPart3', 'bomPart4', 'actions'];

  dataSource: MatTableDataSource<KoreaRnDModel>;

  constructor(private koreanRnDServ: KorearndService, public dialog: MatDialog, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.koreanRnDServ.getKoreaRnDModelsWithAllData().subscribe((response) => {
      this.models = response;
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
    let o13:Observable<boolean> = this.actions.valueChanges;
    
 
    merge(o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13).subscribe( v=>{
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
    this.columnDefinitions[12].hide = this.actions.value;
    
  
       this.getDisplayedColumns();
     });
 
    this.getDisplayedColumns();
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

  openEdit(object: Model){
    this.dialog.open(DialogFormKoreaRndComponent, {data: object});
  }

  subscribeToRefreshEvent(){
    this.koreanRnDServ.getKoreaRnDModelsWithAllData().subscribe(() => this.cdr.detectChanges());
  }

  exportToExcel(){
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Models');

    XLSX.writeFile(wb, 'ForKorea.xlsx');
  }


}
