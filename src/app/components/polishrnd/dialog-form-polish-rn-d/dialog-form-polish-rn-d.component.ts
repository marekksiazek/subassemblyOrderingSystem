import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Model } from '../../../types/model';
import { ModelPostService } from '../../../services/model-post.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PolishrndComponent } from '../polishrnd.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-form-polish-rn-d',
  templateUrl: './dialog-form-polish-rn-d.component.html',
  styleUrl: './dialog-form-polish-rn-d.component.scss'
})
export class DialogFormPolishRnDComponent implements OnInit{

@Output() refreshEvent = new EventEmitter<void>();

constructor(private builder: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: Model, private modelPostServ:  ModelPostService, private snackBar: MatSnackBar, private router: Router) {}

  FormData: FormGroup = this.builder.group({
    modelSuffix: new FormControl(this.data.modelSuffix),
        suffix: new FormControl(this.data.suffix),
        part1: new FormControl(this.data.part1),
        part2: new FormControl(this.data.part2),
        part3: new FormControl(this.data.part3),
        part4: new FormControl(this.data.part4),
        CBomModelSuffix: new FormControl(this.data.cbomModelSuffix),
        bomSuffix: new FormControl(this.data.bomSuffix),
        bomPart1: new FormControl(this.data.bomPart1),
        bomPart2: new FormControl(this.data.bomPart2),
        bomPart3: new FormControl(this.data.bomPart3),
        bomPart4: new FormControl(this.data.bomPart4),
  })


  ngOnInit(): void {
    
  }



  updateSubmit(){
    this.modelPostServ.PostUpdate(this.FormData.controls.modelSuffix.value, {
      modelSuffix: this.FormData.controls.modelSuffix.value,
      suffix: this.FormData.controls.suffix.value,
      part1: this.FormData.controls.part1.value,
      part2: this.FormData.controls.part2.value,
      part3: this.FormData.controls.part3.value,
      part4: this.FormData.controls.part4.value,
      cbomModelSuffix: this.FormData.controls.CBomModelSuffix.value,
      bomSuffix: this.FormData.controls.bomSuffix.value,
      bomPart1: this.FormData.controls.bomPart1.value,
      bomPart2: this.FormData.controls.bomPart2.value,
      bomPart3: this.FormData.controls.bomPart3.value,
      bomPart4: this.FormData.controls.bomPart4.value,
    }).subscribe({
      next: () => this.router.navigateByUrl('/', {skipLocationChange:true}).then(() => {
        this.router.navigate(['/polishrnd'])
      }) ,
      error: (error) => {
        console.log(error.message)
        console.log({error})
      }
    })
  }

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 3000,
      panelClass: 'green',
      verticalPosition: 'top'
    });
  }
}
