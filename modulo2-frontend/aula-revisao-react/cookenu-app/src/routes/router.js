import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from '../components'
import { AddRecipePage, FeedPage, LoginPage, RecipeDetailPage, SignUpPage,  } from '../pages/index'

export const Router = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/login' element={ <LoginPage/> }/>
                <Route path='/signup' element={ <SignUpPage/> }/>
                <Route path='/feed' element={ <FeedPage/> }/>
                <Route path='/add-recipe' element={ <AddRecipePage/> }/>
                <Route path='/recipe/:id' element={ <RecipeDetailPage/> }/>
                <Route/>
            </Routes>
        </BrowserRouter>

    )
}