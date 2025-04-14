import { Link } from 'react-router';
export default function Product() {
    return(
        <>
            <section className="py-5 text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-bold display-5 mb-1 ">Buku Yang Mungkin Anda Suka</h1>
                <p className="lead text-body-secondary">Temukan buku menarik sesuai minatmu, dengan genre yang anda sukai.</p>
                <p>
                    <Link to="/" className="btn btn-primary my-2 m-2">Lihat</Link>
                    <Link to="/" className="btn btn-secondary my-2">Buku Lain</Link>
                </p>
                </div>
            </div>
            </section>

            <div id="book" className="album py-5 bg-body-tertiary">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="350" src="https://tse3.mm.bing.net/th?id=OIP.PvgogjGbFaaYevrE0cvqSwHaJ4&pid=Api" alt="Thumbnail"/>
                    <div className="card-body">
                        <p className="card-text mb-2">Melanjutkan petualangan Raib, Seli, dan Ali di dunia Klan Matahari. Mereka menjalani misi penting yang menguji persahabatan dan keberanian mereka.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="350" src="https://tse3.mm.bing.net/th?id=OIP.D67lPDW_xSs7EMV1qykdXQHaK-&pid=Api" alt="Thumbnail"/>
                    <div className="card-body">
                        <p className="card-text mb-2">Buku ketiga dari seri dunia paralel. Ali menjadi tokoh utama dengan pengetahuan sainsnya, menghadapi misi penting yang lebih berbahaya dari sebelumnya.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="350" src="https://tse3.mm.bing.net/th?id=OIP.gr8-zTJxXkNUamchhasRkAHaK-&pid=Api" alt="Thumbnail"/>
                    <div className="card-body">
                        <p className="card-text mb-2">Lanjutan dari seri Bumi, novel ini penuh dengan elemen fantasi dan teknologi, dengan ancaman besar dari musuh tersembunyi di balik dunia paralel.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="325" src="https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg" alt="Thumbnail"/>
                    <div className="card-body">
                        <p className="card-text mb-2">Novel pertama. Mengenalkan tokoh utama Raib, gadis SMA yang memiliki kekuatan menghilang, dan membuka pintu ke dunia paralel bersama Seli dan Ali.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="325" src="https://tse1.mm.bing.net/th?q=Sampul+Novel+Komet+Tere+Liye" alt="Thumbnail"/>
                    <div className="card-body">
                        <p className="card-text mb-2">Raib, Seli, dan Ali menyelusuri dunia kelima bersama komet yang membimbing mereka menuju pengetahuan baru.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="325" src="https://tse1.mm.bing.net/th?q=Sampul+Novel+Komet+Minor+Tere+Liye" alt="Thumbnail"/>
                    <div className="card-body">
                        <p className="card-text mb-2">Lanjutan langsung dari "Komet", memperlihatkan keajaiban dan bahaya lebih dalam dari dunia paralel yang mereka temui.</p>
                        <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">Lihat</button>
                        </div>
                        <small className="text-body-secondary">9 mins</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    );
}