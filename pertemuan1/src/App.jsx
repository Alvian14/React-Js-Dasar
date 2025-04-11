function App() {
  return (
    <>
      <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a href="/" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
          <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
          <span className="ms-2 fs-4 fw-bold">OnlineBook</span>
          </a>
        </div> 

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#home" className="nav-link px-2 fw-bold">Beranda</a></li>
          <li><a href="#book" className="nav-link px-2 fw-bold">Buku</a></li>
          <li><a href="#team" className="nav-link px-2 fw-bold">Tim</a></li>
          <li><a href="#contact" className="nav-link px-2 fw-bold">kontak</a></li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Register</button>
        </div>
      </header>

      {/* halaman home */}
      <div id="home" className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-4">Kisah Tanah Jawa Pocong Gundul</h1>
            <p className="lead mb-3">Berkisahkan tentang kisah nyata yang berlatar di sebuah sekolah yang dimana sebelum berdirinya sekolah tersebut adalah tempat penyembahan iblis.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli Sekarang</button>
              <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img className="rounded-lg-3" src="https://opacperpustakaan.jogjakota.go.id/inlislite3/uploaded_files/sampul_koleksi/original/Monograf/51853.jpg" alt="Pocong Gundul" width="400"/>
          </div>
        </div>
      </div>

       {/* section book */}
      <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-bold display-5 mb-1 ">Buku Yang Mungkin Anda Suka</h1>
          <p className="lead text-body-secondary">Temukan buku menarik sesuai minatmu, dengan genre yang anda sukai.</p>
          <p>
            <a href="#book" className="btn btn-primary my-2 m-2">Lihat</a>
            <a href="#book" className="btn btn-secondary my-2">Buku Lain</a>
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


    {/* Section Team */}
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


    {/* Section Contact */}
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




    {/* Footer */}
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>&copy; 2025 Alvian, NF Academy.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fab fa-instagram"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="fab fa-facebook"></i></a></li>
            </ul>
    </div>

  </div>
    </>
  )
}

export default App
