import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function Router() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      </BrowserRouter>
      </>
    );
  }
  
  export default Router;