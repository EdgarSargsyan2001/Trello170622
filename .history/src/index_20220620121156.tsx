import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  store ,{persistor} from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(

  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </PersistGate>
   </Provider>
  // </React.StrictMode>
);

