import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { navigateToLogin } from "../routes/coordinator"

export function useProtectedPage (){
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if(!token){
            navigateToLogin(navigate)
        }
    },[])
}