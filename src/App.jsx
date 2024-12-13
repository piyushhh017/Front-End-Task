import './App.css'
import AppLayout from './components/Layout/Applayout';
import EmployerList from './pages/employerList.jsx';
import EmployeeData from './pages/EmployeeData.jsx';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<Error />,
      children: [
        {
          path: "/",
          element: <EmployerList />,
        },
        {
          path: "/employee/:id/:name",
          element: <EmployeeData />,
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
