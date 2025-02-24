import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./components/layouts/AppLayout.jsx"
import Home from './pages/Home.jsx';
import Contact, { contactData } from './pages/Contact.jsx';
import Movie from './pages/Movie.jsx';
import Service from './pages/Service.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/ErrorPage.jsx';
import { getMoviesData } from './api/GetAPIData.jsx';
import MovieDetails from './components/UI/MovieDetails.jsx';
import { getMoviesDetails } from './api/GetMovieDetails.jsx';

const App = () => {

  const render = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/react-router-form-component-n-action",
          element: <Home />
        },
        {
          path: "/react-router-form-component-n-action/contact",
          element: <Contact />,
          action: contactData,
        },
        {
          path: "/react-router-form-component-n-action/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/react-router-form-component-n-action/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/react-router-form-component-n-action/service",
          element: <Service />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={render} />
  )
}

export default App