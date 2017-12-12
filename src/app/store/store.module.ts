import { NgModule } from '@angular/core';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

// The top-level reducers and epics that make up our app's logic.
import { AppState } from './store.model';
import { rootReducer } from './store.reducers';
import { RootEpics } from './store.epics';

@NgModule({
  imports: [NgReduxModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    // public store: any, // TODO NgRedux<AppState> it throwing error
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      {},
      [ ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
