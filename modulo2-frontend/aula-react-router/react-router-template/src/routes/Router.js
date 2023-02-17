import { BrowserRouter, Routes , Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import LoginPage from "../pages/LoginPage"

export const Router = () => {
    return(
        <BrowserRouter>
        {/* não troca a path/ está em todas as paginas */}
            <Routes>
                {/* troca o path */}
                <Route index element = { <HomePage/> } />
                <Route path="/profile/:name" element = { <AboutPage/> } />
                <Route path="/login" element = { <LoginPage/> } />
                <Route path="*" element = { <ErrorPage/> } />
            </Routes>
        </BrowserRouter>
    )
}