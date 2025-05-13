import React from 'react';
import {
  createBrowserRouter,
} from 'react-router-dom';
import App from './App';
import About from './About';
import Home3 from './Home3';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>, // Layout component
    children: [
      { index: true, element: <Home3/>}, // default path "/"
      { path: "about", element: <About/> },
      { path: "contact", element:  <Contact/> }
    ]
  }
]);


export default router;

