import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StoreModule } from '../store/store.module';
import { TodosComponent } from './todos.component';
import { TodoService } from './shared/todo.service';
import { TodoActions } from './shared/todo.actions';
import { TodoEpics } from './shared/todo.epics';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    StoreModule
  ],
  declarations: [
    TodosComponent
  ],
  exports: [
    TodosComponent
  ],
  providers: [
    TodoService,
    TodoActions,
    TodoEpics
  ]
})
export class TodosModule { }
