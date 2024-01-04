import React from "react";
import about1 from "../assets/about-1.png";

const Home = () => {
  return (
    <>
      <div className="main-home">
        <section className="home" id="home">
          <div className="home-bg"></div>
          <div className="home-text">
            <p>TechKut</p>
            <p>Always ready to teach you , start from today...</p>
            <p>Enroll Now</p>
            <button>Register</button>
          </div>
        </section>
        <section className="info">
          <div className="info-first">
            <div className="info-wrapper-first">
              <div className="info-img-first"></div>
              <p>
                Lorem ipsum dolor sit,
                <br /> amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="info-second">
            <div className="info-wrapper-second">
              <div className="info-img-second"></div>
              <p>
                Lorem ipsum dolor sit,
                <br /> amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </section>

        <section className="main-about" id="about">
          <p
            style={{
              fontSize: "40px",
              textAlign: "center",
              textDecoration: "underline",
              marginTop: "30px",
            }}
          >
            Thinks you know about us
          </p>
          <div className="about-wrapper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit,
              consequuntur similique enim error necessitatibus minus saepe!
              Inventore aut earum in maxime, nobis reiciendis. In mollitia esse,
              accusamus autem aut quo.
            </p>
            <br />
            <p style={{ color: "blue", cursor: "pointer" }}>Learn More</p>
          </div>
          <img src={about1} alt="loading" />
        </section>

        <section className="agr-container" id="agreement">
          <div className="agr-main">
            <div className="agr-header">
              <h1>Terms and Conditions</h1>
            </div>

            <main>
              <h2>1. Agreement Overview</h2>
              <p>This Agreement is entered into by and between...</p>

              <h2>2. Acceptance of Terms</h2>
              <p>
                By accessing or using this website, you agree to be bound by
                these terms and conditions...
              </p>

              <h2>3. Usage Policies</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                cumque?
              </p>
              <h2>4. Privacy Terms</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis dignissimos impedit itaque.
              </p>
              <button id="agreeButton">I Agree</button>
            </main>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
