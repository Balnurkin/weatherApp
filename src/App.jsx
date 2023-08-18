import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link, Outlet, useParams } from "react-router-dom"
import Home from "./Components/Home/Home"
import Search from "./Components/Search/Search"
import './global.css'
import Profile from "./Components/Profile/Profile"
import NavBar from "./Components/NavBar/NavBar"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index element={<Home />} />
    <Route path='/:cityName' element={<Home />} />
    <Route path='/search' element={<Search />} />
    <Route path='/profile' element={<Profile />} />
  </Route>
))

function RootLayout (){
  return <>
    <NavBar />
    <Outlet />
  </>
}

function App() {
  return <RouterProvider router={router} />
}

export default App;
