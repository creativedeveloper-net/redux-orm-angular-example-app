import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { TodosComponent } from './todos.component';
import { TodoService } from './shared/todo.service';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    TodosComponent
  ],
  exports: [
    TodosComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodosModule { }
