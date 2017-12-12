import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
// import { createLogger } from 'redux-logger';
// import { rootReducer } from './reducers';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';

// interface IAppState { /* ... */ };
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgReduxModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // ngRedux.configureStore(rootReducer, {}, [ createLogger() ]);
  }
}
