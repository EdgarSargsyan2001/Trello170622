import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  store ,{persistor} from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root')as);
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
