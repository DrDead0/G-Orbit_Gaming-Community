import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    ManageComponent,
    UploadComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    VideoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class VideoModule { }
