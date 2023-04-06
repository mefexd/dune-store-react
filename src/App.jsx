function App() {
  return (
    <div className="App">
      <header className="header-container">
        <a href="#">
          <img alt="logo" src="/logo.svg" className="header-logo" />
        </a>
        <nav className="nav-container">
          <div className="nav-areas">
            <button>Mens</button>
            <button>Womens</button>
            <button>Shoes</button>
            <button>Accessories</button>
          </div>
          <div className="nav-account">
            <button>Log In</button>
          </div>
        </nav>
      </header>
      <main>
        <section className="main-hero">
          <ul>
            <li>Shop Mens</li>
            <li>Shop Womens</li>
          </ul>
        </section>
        <section className="main-categories">
          <ul>
            <li>Shorts</li>
            <li>Smart stuff</li>
            <li>Outerwear</li>
            <li>Tees</li>
            <li>Shirts</li>
            <li>Trainers</li>
          </ul>
        </section>
        <footer>
          <section className="footer-about">
            <h3>About</h3>
            <ul>
              <li>About us</li>
              <li>Careers</li>
              <li>Support</li>
              <li>FAQ</li>
            </ul>
          </section>
          <section className="footer-contact">
            <h3>Contact</h3>
            <ul>
              <li>Get in touch</li>
              <li>Complaints</li>
              <li>Help</li>
            </ul>
          </section>
        </footer>
      </main>
    </div>
  );
}

export default App;
