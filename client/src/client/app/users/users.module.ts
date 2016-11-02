import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule],
    declarations: [UsersComponent],
    exports: [UsersComponent]
})

export class UsersModule { }
