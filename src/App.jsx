import { NavBar } from "./components/NavBar";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main>
          <section className="main-banner">
            <div className="large">
              <span className="banner-span">NEW HERE?</span> Get 20% off almost
              everything* <br className="hide" />
              Just use special code:
              <span className="banner-span"> HIFRIEND</span>
            </div>
          </section>
          <section className="main-hero">
            <ul className="hero-items large">
              <li>
                <a href="#">
                  <div className="hero-media">
                    <img
                      src="https://images.unsplash.com/flagged/photo-1567474073994-160fc6006783?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="Image link to Womens fashion"
                      loading="lazy"
                      className="hero-image"
                    />
                  </div>
                  <div className="hero-text">
                    <h2>Shop Womens</h2>
                    <p>Explore the latest trends in womens fashion...</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div className="hero-media">
                    <img
                      src="https://images.unsplash.com/photo-1593757147298-e064ed1419e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt="Image link to Mens fashion"
                      loading="lazy"
                      className="hero-image"
                    />
                  </div>
                  <div className="hero-text">
                    <h2>Shop Mens</h2>
                    <p>Explore the latest trends in mens fashion...</p>
                  </div>
                </a>
              </li>
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
    </BrowserRouter>
  );
}

export default App;
