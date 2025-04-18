import { Link } from 'react-router';
import './index.css';
export default function Header() {
    return (
        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
                        <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
                        <span className="ms-2 fs-4 fw-bold">OnlineBook</span>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-item-custom">Beranda</Link></li>
                    <li><Link to="/books" className="nav-item-custom">Buku</Link></li>
                    <li><Link to="/team" className="nav-item-custom">Tim</Link></li>
                    <li><Link to="/kontak" className="nav-item-custom">Kontak</Link></li>
                </ul>



                <div className="col-md-3 text-end">
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    </Link>
                    <Link to="/register">
                        <button type="button" className="btn btn-primary">Register</button>
                    </Link> 
                </div>
            </header>
        </>
    );
}
