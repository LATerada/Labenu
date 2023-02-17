import {StyledHeader, StyledButton} from "../style"
import { useNavigate } from "react-router-dom"
import {irParaHome, irParaLogin, irParaPerfil} from "../routes/coordinator"

function Header() {
  const navigate = useNavigate()

  return (
    <StyledHeader>
      <StyledButton onClick={() => irParaHome(navigate)}>
        Ir para página inicial
      </StyledButton>
      <StyledButton onClick={() => irParaLogin(navigate)}>
        Ir para página de login
      </StyledButton>
      <StyledButton onClick={() => irParaPerfil(navigate, "Nome")}>
        Ir para página de perfil
      </StyledButton>
    </StyledHeader>
  );
}

export default Header;
