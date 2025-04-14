import { Link } from "react-router";
export default function Footer() {
    return(
        <>
            <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 2025 Alvian, NF Academy.</p>
                <ul className="list-unstyled d-flex">
                <li className="ms-3"><Link className="link-body-emphasis" to="/"><i className="fab fa-twitter"></i></Link></li>
                <li className="ms-3"><Link className="link-body-emphasis" to="/"><i className="fab fa-instagram"></i></Link></li>
                <li className="ms-3"><Link className="link-body-emphasis" to="/"><i className="fab fa-facebook"></i></Link></li>
                </ul>
            </div>
        </>
    );
}