import { Header } from "../components/Header";
import { useParams } from "react-router-dom"

function ProductPage() {
    const pathParams = useParams();

    return (
        <section>
            <Header/>
            <h1>Página do produto {pathParams.id}</h1>
        </section>
    );
}

export default ProductPage;
