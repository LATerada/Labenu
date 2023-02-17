export const irParaHome = (navigate) => {
    navigate("/")
  }

export const irParaPerfil = (navigate, nome) => {
    navigate(`/profile/${nome}`)
  }

export const irParaLogin = (navigate) => {
  navigate("/login")
}
