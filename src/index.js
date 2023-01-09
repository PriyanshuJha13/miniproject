import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PurchaseCourse from './Pages/PurchaseCourse';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookFreeTrial from './Pages/BookFreeTrial';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "purchasecourse",
    element: <PurchaseCourse />,
  },
  {
    path: "bookfreetrial",
    element: <BookFreeTrial />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

