export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToSignUpPage = (navigate) => {
    navigate('/signup')
}

export const goToFeedPage = (navigate) => {
    navigate('/feed')
}

export const goToRecipeDetailPage = (navigate, id) => {
    navigate(`/detail/${id}`)
}

export const goToAddRecipePage = (navigate) => {
    navigate('/add-recipe')
}
