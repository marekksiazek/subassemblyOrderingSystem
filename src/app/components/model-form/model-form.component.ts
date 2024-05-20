import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ModelPostService } from '../../services/model-post.service';
import { Model } from '../../types/model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.scss'
})
export class ModelFormComponent implements OnInit{

  FormData: FormGroup;
  FormDataUpdate: FormGroup;
  FormDataSearch: FormGroup;

  searchTerm: string;


  constructor (private builder: FormBuilder, private modelPostServ: ModelPostService, private snackBar: MatSnackBar ) {}


  ngOnInit(): void {
      this.FormData = this.builder.group({
        modelSuffix: new FormControl('', [Validators.required]),
        suffix: new FormControl(''),
        part1: new FormControl(''),
        part2: new FormControl(''),
        part3: new FormControl(''),
        part4: new FormControl(''),
        CBomModelSuffix: new FormControl(''),
        bomSuffix: new FormControl(''),
        bomPart1: new FormControl(''),
        bomPart2: new FormControl(''),
        bomPart3: new FormControl(''),
        bomPart4: new FormControl(''),
      })

      this.FormDataSearch = this.builder.group({
        modelSuffix: new FormControl(''),
        suffix: new FormControl(''),
        part1: new FormControl(''),
        part2: new FormControl(''),
        part3: new FormControl(''),
        part4: new FormControl(''),
        CBomModelSuffix: new FormControl(''),
        bomSuffix: new FormControl(''),
        bomPart1: new FormControl(''),
        bomPart2: new FormControl(''),
        bomPart3: new FormControl(''),
        bomPart4: new FormControl(''),
      })

      this.FormDataUpdate = this.builder.group({
        modelSuffixUpdate: new FormControl('', [Validators.required]),
        suffixUpdate: new FormControl(''),
        part1Update: new FormControl(''),
        part2Update: new FormControl(''),
        part3Update: new FormControl(''),
        part4Update: new FormControl(''),
        CBomModelSuffixUpdate: new FormControl(''),
        bomSuffixUpdate: new FormControl(''),
        bomPart1Update: new FormControl(''),
        bomPart2Update: new FormControl(''),
        bomPart3Update: new FormControl(''),
        bomPart4Update: new FormControl(''),
      })
  }

  onSubmit(FormData){
    this.modelPostServ.PostMessage(FormData).subscribe({
     next: (response) => {
      this.FormData.reset();
     }, 
      error: (error) => {
      console.warn(error.responseText)
      console.log({error})
    }
    });
  }

  onSubmitUpdate(){
    this.modelPostServ.PostUpdate(this.FormDataUpdate.controls.modelSuffixUpdate.value, {
      modelSuffix: this.FormDataUpdate.controls.modelSuffixUpdate.value,
      suffix: this.FormDataUpdate.controls.suffixUpdate.value,
      part1: this.FormDataUpdate.controls.part1Update.value,
      part2: this.FormDataUpdate.controls.part2Update.value,
      part3: this.FormDataUpdate.controls.part3Update.value,
      part4: this.FormDataUpdate.controls.part4Update.value,
      cbomModelSuffix: this.FormDataUpdate.controls.CBomModelSuffixUpdate.value,
      bomSuffix: this.FormDataUpdate.controls.bomSuffixUpdate.value,
      bomPart1: this.FormDataUpdate.controls.bomPart1Update.value,
      bomPart2: this.FormDataUpdate.controls.bomPart2Update.value,
      bomPart3: this.FormDataUpdate.controls.bomPart3Update.value,
      bomPart4: this.FormDataUpdate.controls.bomPart4Update.value,
      
    }).subscribe({
     next: (response) => {
      this.FormDataUpdate.reset();
     }, 
      error: (error) => {
      console.warn(error.responseText)
      console.log({error})
    }
    });
  }

  searchItem(){
    this.modelPostServ.GetModelByModel(this.searchTerm).subscribe({
      next: (response: Model) => {
        this.searchTerm = '';

        this.FormDataUpdate.controls.modelSuffixUpdate.setValue(response.modelSuffix)
        this.FormDataUpdate.controls.suffixUpdate.setValue(response.suffix)
        this.FormDataUpdate.controls.part1Update.setValue(response.part1)
        this.FormDataUpdate.controls.part2Update.setValue(response.part2)
        this.FormDataUpdate.controls.part3Update.setValue(response.part3)
        this.FormDataUpdate.controls.part4Update.setValue(response.part4)
        this.FormDataUpdate.controls.CBomModelSuffixUpdate.setValue(response.cbomModelSuffix)
        this.FormDataUpdate.controls.bomSuffixUpdate.setValue(response.bomSuffix)
        this.FormDataUpdate.controls.bomPart1Update.setValue(response.bomPart1)
        this.FormDataUpdate.controls.bomPart2Update.setValue(response.bomPart2)
        this.FormDataUpdate.controls.bomPart3Update.setValue(response.bomPart3)
        this.FormDataUpdate.controls.bomPart4Update.setValue(response.bomPart4)

        
        // console.log(this.FormDataUpdate)
        console.log(response)
      },
      error: (error) => {
        console.warn(error.responseText)
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
