import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import logo from "./assets/cinderella-logo.jpg";
import { supabase } from "./lib/supabase";

const heroImage = "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=2200&q=85";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <img src={logo} alt="Cinderella Golf Club" />
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link className="active" to="/membership">Membership</Link>
          <Link to="/login" className="login-link">Member Login</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <img className="footer-logo" src={logo} alt="Cinderella Golf Club" />
          <p className="motto">Play · Connect · Belong</p>
        </div>
        <div>
          <span className="footer-label">Membership</span>
          <Link to="/membership">Membership Application</Link>
          <Link to="/login">Member Login</Link>
        </div>
        <div>
          <span className="footer-label">Cinderella Golf Club</span>
          <p>Private Membership Club</p>
          <p>Philippines</p>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} Cinderella Golf Club. All rights reserved.</div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" style={{backgroundImage: `linear-gradient(90deg, rgba(16,30,13,.78), rgba(16,30,13,.15)), url(${heroImage})`}}>
          <div className="hero-content">
            <span className="eyebrow light">CINDERELLA GOLF CLUB</span>
            <h1>Where Everyround Feels .<br />Like Home.</h1>
            <p>An exclusive golf club where great golf, lasting friendships, and exceptional experiences come together.</p>
            <Link to="/membership" className="button button-gold">Explore Membership <span>→</span></Link>
          </div>
        </section>

        <section className="intro-section">
          <span className="eyebrow">CINDERELLA GOLF CLUB</span>
          <h2>A Place to Belong</h2>
          <p>Discover a private club experience built around golf, community, and memorable moments.</p>
          <Link to="/membership" className="text-link">View Membership <span>→</span></Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Membership() {
  return (
    <>
      <Header />
      <main>
        <section className="membership-hero">
          <div>
            <span className="eyebrow light">CINDERELLA GOLF CLUB</span>
            <h1>Membership</h1>
            <p>Join a community of passionate golfers and like-minded individuals.</p>
          </div>
        </section>

        <section className="membership-intro">
          <div>
            <span className="eyebrow">PRIVATE CLUB · EXCLUSIVE COMMUNITY</span>
            <h2>A Membership<br />Worth Belonging To.</h2>
          </div>
          <div>
            <p>Membership at Cinderella Golf Club is more than access to the course. It is an invitation to become part of a community built on connection, tradition, and the love of the game.</p>
            <div className="benefits">
              <div><b>01</b><span>Exclusive Club Access</span></div>
              <div><b>02</b><span>Member-Only Events</span></div>
              <div><b>03</b><span>Premium Golf Experience</span></div>
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="form-heading">
            <span className="eyebrow">APPLICATION</span>
            <h2>Membership Application</h2>
            <p>Please provide the information below to begin your membership application.</p>
          </div>

          <form onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = Object.fromEntries(new FormData(form).entries());
              if (!supabase) {
                alert("Supabase is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to .env.local.");
                return;
              }
              const { error } = await supabase.from("membership_applications").insert([{
                title: data.title,
                family_name: data.family_name,
                given_name: data.given_name,
                middle_name: data.middle_name || null,
                email: data.email,
                date_of_birth: data.date_of_birth,
                address: data.address,
                mobile_no: data.mobile_no,
                company_affiliation: data.company_affiliation || null,
                industry: data.industry || null,
                endorsed_by: data.endorsed_by
              }]);
              if (error) {
                alert(error.message);
                return;
              }
              form.reset();
              alert("Thank you. Your membership application has been submitted.");
            }}>
            <div className="form-block">
              <h3>Personal Information</h3>
              <div className="form-grid">
                <label className="small"><span>Title</span><select name="title"><option>Mr.</option><option>Ms.</option><option>Mrs.</option><option>Dr.</option></select></label>
                <label><span>Family Name <i>*</i></span><input name="family_name" required /></label>
                <label><span>Given Name <i>*</i></span><input name="given_name" required /></label>
                <label><span>Middle Name</span><input name="middle_name" /></label>
                <label><span>Email Address <i>*</i></span><input name="email" type="email" required /></label>
                <label><span>Date of Birth <i>*</i></span><input name="date_of_birth" type="date" required /></label>
                <label><span>Mobile No. <i>*</i></span><input name="mobile_no" type="tel" required /></label>
              </div>
            </div>

            <div className="form-block">
              <h3>Contact Information</h3>
              <label><span>Address <i>*</i></span><textarea name="address" rows="3" required /></label>
            </div>

            <div className="form-block">
              <h3>Professional Information</h3>
              <div className="form-grid">
                <label><span>Company / Affiliation</span><input name="company_affiliation" /></label>
                <label><span>Industry</span><input name="industry" /></label>
              </div>
            </div>

            <div className="form-block">
              <h3>Club Endorsement</h3>
              <label><span>Endorsed By <i>*</i></span><input name="endorsed_by" placeholder="Name of current member / endorser" required /></label>
            </div>

            <div className="form-submit">
              <p>By submitting this application, you confirm that the information provided is accurate.</p>
              <button className="button button-green" type="submit">Submit Membership Application <span>→</span></button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Login() {
  const [message, setMessage] = React.useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setMessage("");
    if (!supabase) {
      setMessage("Supabase is not configured yet. Add your project credentials to .env.local.");
      return;
    }
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password
    });
    if (error) {
      setMessage(error.message);
      return;
    }
    window.location.href = "/account";
  }

  return (
    <>
      <Header />
      <main className="login-page">
        <div className="login-card">
          <span className="eyebrow">CINDERELLA GOLF CLUB</span>
          <h1>Member Login</h1>
          <p>Access your private member account.</p>
          <form onSubmit={handleLogin}>
            <label><span>Email Address</span><input name="email" type="email" required /></label>
            <label><span>Password</span><input name="password" type="password" required /></label>
            <button className="button button-green" type="submit">Sign In <span>→</span></button>
          </form>
          {message && <p className="login-error">{message}</p>}
          <p className="login-note">Membership applications are reviewed by the club.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Account() {
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (!supabase) return;
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) window.location.href = "/login";
      else setEmail(data.user.email || "");
    });
  }, []);

  async function signOut() {
    if (supabase) await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <>
      <Header />
      <main className="login-page">
        <div className="login-card">
          <span className="eyebrow">MEMBER AREA</span>
          <h1>Welcome</h1>
          <p>You are signed in as <strong>{email}</strong>.</p>
          <button className="button button-green" onClick={signOut}>Sign Out <span>→</span></button>
        </div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/login" element={<Login />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
