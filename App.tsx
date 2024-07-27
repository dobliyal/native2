import React from 'react';
import { Provider } from 'react-redux';
import { createEpicMiddleware, Epic } from 'redux-observable'; 
import { Action } from 'redux';
import { rootReducer,rootEpic } from './redux/store';
import AppNavigator from './navigation/AppNavigator';
import { configureStore } from '@reduxjs/toolkit';

const epicMiddleware = createEpicMiddleware<Action, Action, void, any>(); 

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic as Epic<Action, Action, void, any>); 

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;

