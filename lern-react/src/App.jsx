import './App.css'

// function Header
function Header() {
  return(
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

function Content() {
  return <h1>Content</h1>;
}

function Footer() {
  return (
    <footer>
      <h2>Alvian</h2>
      <p>by @2023</p>
    </footer>
  )
}

function Hello() {
  const nama = "Alvian";
  return(
    <>
      <h1>Hello Word</h1>
      <p> saya {nama} seorang Programmer web </p>
    </>
  )

}

function Greeting (props) {
  return <h1>Hello, {props.name}</h1>
  
}

function Profile(props) {
  return(
    <div>
      <h1>Saya Adalah {props.name}</h1>
      <p>Umur Saya {props.age}</p>
      <p>Saya berasal dari Negara {props.country}</p>
    </div>
  )
}

function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Hello/>
    <Greeting name = "Alice" />
    <Profile name = "Alvian" age={21} country = "Indonesia"/>
    <Footer/>
    </>
  );
}

export default App
