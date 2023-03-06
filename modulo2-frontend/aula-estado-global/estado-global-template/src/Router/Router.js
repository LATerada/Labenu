import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercadinho from "../Pages/Mercadinho";
import Carrinho from "../Pages/Carrinho";
import frutaria from "../frutaria.json";
import Cadastro from "../Pages/Cadastro";

export default function Router() {
    const [frutas, setFrutas] = useState(frutaria.frutaria);
    const [carrinho, setCarrinho] = useState([])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Mercadinho
                                frutas={frutas}
                                carrinho={carrinho}
                                setCarrinho={setCarrinho}/>}
                />
                <Route
                    path="/cart"
                    element={<Carrinho
                                frutas={frutas}
                                carrinho={carrinho}
                                setCarrinho={setCarrinho}/>}
                />
                 <Route
                    path="/form"
                    element={<Cadastro
                                frutas={frutas}
                                setFrutas={setFrutas}/>}
                />
            </Routes>
        </BrowserRouter>
    );
}