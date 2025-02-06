import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ContextProvider from './components/ContextApi/Context';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ContextProvider>
  <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </BrowserRouter>
      </ContextProvider>

);

reportWebVitals();