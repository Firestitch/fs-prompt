import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// Dialog
import { FsPromptInputComponent } from './prompt-input.component';


@NgModule({
  imports: [
    // Angular
    CommonModule,
    ReactiveFormsModule,

    // Material
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
  ],
  entryComponents: [
    FsPromptInputComponent,
  ],
  declarations: [
    FsPromptInputComponent,
  ],
})
export class FsPromptInputModule {}