import { useState } from 'react';
import { Link } from 'react-router';
import './index.css';
import booksData from '../../../utils/books';

export default function Product() {
    // State untuk menyimpan buku yang ada
    const [books, setBooks] = useState(booksData);

    // State untuk form input
    const [newBook, setNewBook] = useState({
        title: '',
        description: '',
        author: '',
        year: '',
        Image: '',
    });

    // Fungsi untuk menangani perubahan input form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: value,
        });
    };

    // Fungsi untuk penambahan buku baru
    const handleAddBook = () => {
        if (newBook.title && newBook.author && newBook.year && newBook.Image) {
            setBooks([...books, newBook]);
            setNewBook({ title: '', description: '', author: '', year: '', Image: '' });
            alert('Produk beru berhasil ditambahkan!')
        } else {
            alert('Harap lengkapi semua kolom!');
        }
    };

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-bold display-5 mb-1">Buku Yang Mungkin Anda Suka</h1>
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
                        {books.map((book) => (
                            <div key={book.id} className="col">
                                <div className="card shadow-sm">
                                    <img className="bd-placeholder-img card-img-top" width="100%" height="350" src={book.Image} alt="Thumbnail" />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold">{book.title}</h5>
                                        <p className="card-text mb-2">{book.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="text-author">
                                                <p className="small-text">{book.author}</p>
                                            </div>
                                            <small className="text-body-secondary">{book.year}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tombol untuk menambah buku */}
                    <button
                        onClick={() => document.getElementById('addBookForm').style.display = 'block'}
                        className="btn btn-success my-2 m-2">
                        Tambah Produk Baru
                    </button>

                    {/* Form untuk menambahkan buku */}
                    <div id="addBookForm" style={{ display: 'none', marginTop: '20px' }}>
                        <h3>Tambah Buku Baru</h3>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="title"
                                value={newBook.title}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Judul Buku"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="description"
                                value={newBook.description}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Deskripsi Buku"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="author"
                                value={newBook.author}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Penulis"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="number"
                                name="year"
                                value={newBook.year}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="Tahun Terbit"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="Image"
                                value={newBook.Image}
                                onChange={handleInputChange}
                                className="form-control"
                                placeholder="URL Gambar"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleAddBook}
                            className="btn btn-primary">
                            Tambah Buku
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
