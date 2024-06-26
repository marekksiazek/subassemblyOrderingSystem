import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ProductionDataComponent } from './components/production-data/production-data.component';
import { FilteredDataComponent } from './components/filtered-data/filtered-data.component';
import { ToExportDataComponent } from './components/to-export-data/to-export-data.component';
import { ModelWithAllDataComponent } from './components/model-with-all-data/model-with-all-data.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { ModelFormComponent } from './components/model-form/model-form.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PolishrndComponent } from './components/polishrnd/polishrnd.component';
import { DialogFormPolishRnDComponent } from './components/polishrnd/dialog-form-polish-rn-d/dialog-form-polish-rn-d.component';
import { KorearndComponent } from './components/korearnd/korearnd.component';
import { ToapproveComponent } from './components/toapprove/toapprove.component';
import { ToApproveModelsComponent } from './components/to-approve-models/to-approve-models.component';
import { DialogFormKoreaRndComponent } from './components/korearnd/dialog-form-korea-rnd/dialog-form-korea-rnd.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    ProductionDataComponent,
    FilteredDataComponent,
    ToExportDataComponent,
    ModelWithAllDataComponent,
    ModelFormComponent,
    MainpageComponent,
    PolishrndComponent,
    DialogFormPolishRnDComponent,
    KorearndComponent,
    ToapproveComponent,
    ToApproveModelsComponent,
    DialogFormKoreaRndComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideRouter(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
