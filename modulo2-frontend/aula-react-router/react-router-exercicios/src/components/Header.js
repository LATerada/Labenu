import { useNavigate } from "react-router-dom"
import { irParaHome, irParaPerfil, irParaProduto } from "../routes/coordinator"


export const Header = () => {
    const navigate = useNavigate()

    return(
        <header>
            <button onClick={() => irParaHome(navigate)} >Ir para Pagina Inicial</button>
            <button onClick={() => irParaPerfil(navigate)} >Ir para Perfil</button>
            <button onClick={() => irParaProduto(navigate, "X")} >Ir para Produto</button>
        </header>
    )
}