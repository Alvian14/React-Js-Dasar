import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import Product from "../components/shared/ProductList";

export default function Home() {
    return(
        <>
            <Header/>
            <Hero/>
            <Product/>
            <Footer/>
        </>
    );
}