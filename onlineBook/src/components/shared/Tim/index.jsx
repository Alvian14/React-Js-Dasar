export default function Tim() {
    return(
        <section id="team" className="py-5 bg-light">
        <div className="container">
            <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-1 ">Tim Kami</h2>
            <p className="text-muted">Kenali orang-orang hebat di balik kesuksesan toko buku kami.</p>
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div className="col">
                <div className="card shadow-sm text-center">
                <img
                    src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400&q=60"
                    className="card-img-top"
                    alt="Alvian Nugroho"
                    style={{ objectFit: 'cover', height: '300px' }}
                />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Alvian Hidayat</h5>
                    <p className="card-text">Pendiri & CEO. Pemimpin visioner yang membawa toko buku ini menuju masa depan yang cerah.</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm text-center">
                <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                    className="card-img-top"
                    alt="Rizky Ramadhan"
                    style={{ objectFit: 'cover', height: '300px' }}
                />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Alkausar</h5>
                    <p className="card-text">Spesialis Pemasaran. Ahli dalam membangun koneksi dengan pembaca dari berbagai penjuru.</p>
                </div>
                </div>
            </div>

            <div className="col">
                <div className="card shadow-sm text-center">
                <img
                    src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg"
                    className="card-img-top"
                    alt="Dika Pratama"
                    style={{ objectFit: 'cover', height: '300px' }}
                />
                <div className="card-body">
                    <h5 className="card-title fw-bold">Atilah lazuar</h5>
                    <p className="card-text">Pengembang. Otak di balik teknologi yang mendukung platform kami.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}