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
          <Link to="/membership" className="header-membership-btn">Membership</Link>
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
            <h1>Where Every Round Feels .<br />Like Home.</h1>
            <p>An exclusive golf club where great golf, lasting friendships, and exceptional experiences come together.</p>
            <Link to="/membership" className="button button-gold">Explore Membership <span>→</span></Link>
          </div>
        </section>

        <section className="events-section" id="events">
          <style>{`
            .events-section{position:relative;overflow:hidden;padding:110px 0 125px;background:radial-gradient(circle at 8% 15%,rgba(188,145,55,.08),transparent 26%),radial-gradient(circle at 92% 85%,rgba(36,64,25,.08),transparent 30%),#f5f1e8;color:#13210f}
            .events-section:before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.32;background-image:linear-gradient(rgba(36,64,25,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(36,64,25,.035) 1px,transparent 1px);background-size:48px 48px;mask-image:linear-gradient(to bottom,transparent,black 18%,black 82%,transparent)}
            .events-shell{position:relative;z-index:1;width:min(1160px,calc(100% - 48px));margin:0 auto}
            .events-heading{max-width:760px;margin-bottom:54px}
            .events-kicker{display:inline-flex;align-items:center;gap:12px;margin-bottom:15px;color:#a87924;font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase}
            .events-kicker:before{content:"";width:32px;height:1px;background:#b98a32}
            .events-heading h2{margin:0 0 16px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(42px,5vw,68px);font-weight:500;line-height:.98;letter-spacing:-.035em;color:#10200d}
            .events-heading p{max-width:680px;margin:0;color:#866522;font-size:15px;line-height:1.8}
            .events-grid{display:grid;grid-template-columns:minmax(0,1.65fr) minmax(320px,.82fr);gap:24px;align-items:start}
            .event-card{position:relative;overflow:hidden;border:1px solid rgba(36,64,25,.14);background:#fbf9f3;box-shadow:0 18px 50px rgba(24,37,19,.07);transition:transform .45s cubic-bezier(.2,.7,.2,1),box-shadow .45s ease}
            .event-card:hover{transform:translateY(-7px);box-shadow:0 28px 65px rgba(24,37,19,.13)}
            .event-featured{min-height:560px}
            .event-image{position:relative;overflow:hidden;height:355px;background:#244019}
            .event-image img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .8s cubic-bezier(.2,.7,.2,1),filter .8s ease;filter:saturate(.82)}
            .event-card:hover .event-image img{transform:scale(1.045);filter:saturate(1)}
            .event-image:after{content:"";position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,20,7,.1),rgba(8,20,7,.38));pointer-events:none}
            .event-date{position:absolute;z-index:2;top:18px;left:18px;min-width:68px;padding:10px 11px 9px;text-align:center;background:#c89b3c;color:#15220f;box-shadow:0 8px 20px rgba(0,0,0,.16)}
            .event-date strong{display:block;font-family:Georgia,"Times New Roman",serif;font-size:17px;font-weight:600;line-height:1.05}
            .event-date span{display:block;margin-top:4px;font-size:9px;font-weight:700;letter-spacing:.18em;text-transform:uppercase}
            .event-type{position:absolute;z-index:2;top:18px;right:18px;display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border:1px solid rgba(236,226,193,.32);background:rgba(13,30,10,.72);color:#f6eed9;backdrop-filter:blur(8px);font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
            .event-type:before{content:"";width:5px;height:5px;border-radius:50%;background:#d2a744;box-shadow:0 0 0 3px rgba(210,167,68,.12)}
            .event-body{padding:29px 30px 31px}
            .event-body h3{margin:0 0 10px;font-family:Georgia,"Times New Roman",serif;font-size:27px;font-weight:500;line-height:1.15;color:#10200d}
            .event-body p{margin:0;max-width:690px;color:#866522;font-size:14px;line-height:1.75}
            .event-action{display:inline-flex;align-items:center;gap:9px;margin-top:20px;color:#244019;font-size:12px;font-weight:800;letter-spacing:.04em;text-decoration:none;transition:gap .25s ease,color .25s ease}
            .event-action span{color:#b4882f;font-size:17px;line-height:1}
            .event-card:hover .event-action{gap:14px;color:#172b10}
            .events-side{display:grid;gap:24px}
            .event-small .event-image{height:205px}
            .event-small .event-body{min-height:218px;padding:25px 24px 27px}
            .event-small .event-body h3{font-size:22px}
            .events-bottom{display:flex;justify-content:space-between;align-items:center;gap:24px;margin-top:34px;padding-top:25px;border-top:1px solid rgba(36,64,25,.13)}
            .events-note{color:#6f745f;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
            .events-calendar-link{display:inline-flex;align-items:center;gap:10px;color:#244019;font-size:12px;font-weight:800;letter-spacing:.08em;text-decoration:none;text-transform:uppercase}
            .events-calendar-link span{color:#b4882f;font-size:18px;transition:transform .25s ease}
            .events-calendar-link:hover span{transform:translateX(5px)}

            .membership-cta{position:relative;min-height:430px;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#173010;color:#f6f0df}
            .membership-cta-bg{position:absolute;inset:0;background-image:url("https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88");background-size:cover;background-position:center 58%;transform:scale(1.02)}
            .membership-cta-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(20,45,15,.9),rgba(20,45,15,.72) 45%,rgba(20,45,15,.88)),linear-gradient(180deg,rgba(20,45,15,.52),rgba(20,45,15,.84))}
            .membership-cta-content{position:relative;z-index:1;width:min(720px,calc(100% - 40px));padding:70px 20px;text-align:center}
            .membership-cta-kicker{display:inline-block;margin-bottom:15px;color:#d0a447;font-size:11px;font-weight:700;letter-spacing:.25em;text-transform:uppercase}
            .membership-cta h2{margin:0 0 20px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(42px,5vw,64px);font-weight:500;line-height:1.02;letter-spacing:-.035em;color:#f7f1e2}
            .membership-cta p{max-width:650px;margin:0 auto 28px;color:rgba(247,241,226,.84);font-size:14px;line-height:1.85}
            .membership-cta-button{display:inline-flex;align-items:center;gap:12px;padding:14px 28px;background:#d0a447;color:#15230f;text-decoration:none;font-size:12px;font-weight:800;letter-spacing:.03em;box-shadow:0 12px 28px rgba(0,0,0,.2);transition:transform .25s ease,background .25s ease,gap .25s ease}
            .membership-cta-button span{font-size:17px}
            .membership-cta-button:hover{transform:translateY(-2px);background:#ddba61;gap:17px}
            @media(max-width:850px){.events-section{padding:80px 0 90px}.events-grid{grid-template-columns:1fr}.events-side{grid-template-columns:repeat(2,minmax(0,1fr))}.event-featured{min-height:auto}}
            @media(max-width:620px){.events-shell{width:min(100% - 32px,1160px)}.events-heading{margin-bottom:35px}.events-heading h2{font-size:42px}.events-side{grid-template-columns:1fr}.event-image{height:285px}.event-small .event-image{height:220px}.events-bottom{align-items:flex-start;flex-direction:column}.membership-cta{min-height:400px}.membership-cta-content{padding:60px 12px}.membership-cta h2{font-size:42px}.membership-cta p{font-size:13px}}
            @media(prefers-reduced-motion:reduce){.event-card,.event-image img,.event-action,.events-calendar-link span{transition:none}}
          `}</style>

          <div className="events-shell">
            <div className="events-heading">
              <span className="events-kicker">On the Calendar</span>
              <h2>Upcoming Events &amp; Tournaments</h2>
              <p>Join us on the course — from relaxed member days to competitive championships, there is always something worth looking forward to.</p>
            </div>

            <div className="events-grid">
              <article className="event-card event-featured">
                <div className="event-image">
                  <img src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1500&q=88" alt="Golfer walking across a manicured golf course" loading="lazy" />
                  <div className="event-date"><strong>Oct 4</strong><span>2026</span></div>
                  <div className="event-type">Tournament</div>
                </div>
                <div className="event-body">
                  <h3>Autumn Classic Championship</h3>
                  <p>Our flagship annual tournament. Open to all members — individual stroke play over 18 holes with prizes across all handicap divisions.</p>
                  <Link to="/membership" className="event-action">Register Your Interest <span>→</span></Link>
                </div>
              </article>

              <div className="events-side">
                <article className="event-card event-small">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1000&q=88" alt="Golf course landscape" loading="lazy" />
                    <div className="event-date"><strong>Oct 18</strong><span>2026</span></div>
                    <div className="event-type">Member Event</div>
                  </div>
                  <div className="event-body">
                    <h3>Member-Guest Invitational</h3>
                    <p>Bring a guest and enjoy a relaxed two-ball better-ball format followed by a club dinner.</p>
                    <Link to="/membership" className="event-action">Learn More <span>→</span></Link>
                  </div>
                </article>

                <article className="event-card event-small">
                  <div className="event-image">
                    <img src="https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1000&q=88" alt="Golfer preparing for a round" loading="lazy" />
                    <div className="event-date"><strong>Nov 8</strong><span>2026</span></div>
                    <div className="event-type">Championship</div>
                  </div>
                  <div className="event-body">
                    <h3>Club Championship Finals</h3>
                    <p>The season's crowning event. Watch the finalists compete for the club's most prestigious title.</p>
                    <Link to="/membership" className="event-action">View Event <span>→</span></Link>
                  </div>
                </article>
              </div>
            </div>

            <div className="events-bottom">
              <span className="events-note">Play · Compete · Connect · Belong</span>
              <a className="events-calendar-link" href="#events">Explore the calendar <span>→</span></a>
            </div>
          </div>
        </section>
        <section className="membership-cta">
          <div className="membership-cta-bg" aria-hidden="true"></div>
          <div className="membership-cta-overlay" aria-hidden="true"></div>
          <div className="membership-cta-content">
            <span className="membership-cta-kicker">Membership</span>
            <h2>Become Part of<br />the Club</h2>
            <p>
              Cinderella Golf Club is more than a course — it's a community.
              Members enjoy exceptional golf, priority event registration,
              and a warm welcome every time they walk through the door.
            </p>
            <Link to="/membership" className="membership-cta-button">
              Explore Membership <span>→</span>
            </Link>
          </div>
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
