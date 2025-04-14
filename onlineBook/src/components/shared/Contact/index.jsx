export default function Contact() {
    return(
        <section id="contact" className="py-5">
        <div className="container">
            <div className="text-center mb-5">
            <h2 className="fw-bold display-5 mb-1">Hubungi Kami</h2>
            <p className="text-muted">Punya pertanyaan atau ingin bekerja sama? Ayo hubungi kami!</p>
            </div>

            <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card shadow-sm p-4">
                <form>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nama</label>
                    <input type="text" className="form-control" id="name" placeholder="Nama Anda" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="anda@contoh.com" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">Pesan</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Tulis pesan Anda di sini..."></textarea>
                    </div>
                    <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Kirim Pesan</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}