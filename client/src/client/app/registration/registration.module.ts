import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule],
    declarations: [RegistrationComponent],
    exports: [RegistrationComponent]
})

export class RegistrationModule { }
