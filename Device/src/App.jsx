import React, {useState} from 'react';
import ReactDOM from "react-dom/client"
import './assets/styles/index.css';


import router from './Router';
import { RouterProvider } from 'react-router-dom';

export default function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);