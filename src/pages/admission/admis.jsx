import "./admis.css";

export default function Admission() {
  return (
    <main id="admis">
      <div id="admis-1">
        <h2>
          The <strong>Admissions</strong> Department.
        </h2>
        <p>Discover how we onboard students to our platform.</p>
        <button>Contact Us</button>
      </div>

      <section id="admis-2">
        <h2>
          Our <strong>admission</strong> process
        </h2>
        <p>
          Are you ready to take your career to the next level? Our bootcamp
          offers an exciting opportunity for individuals who are looking to
          break into the tech industry or accelerate their career growth.
        </p>
        <div id="a2-cont">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section id="admis-3">
        <h2>
          Our <strong>weekly</strong> routine
        </h2>
        <p>Have a look at how our students learn day by day</p>
        <div id="a3-cont">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <div id="admis-4">
        <div id="a4-cont">
          <form id="admis-contact-form">
            <h3>
              Contact <strong>Us</strong>
            </h3>
            <p>Get in touch with the admissions team now.</p>
            <span>
              <label>
                <p>First Name</p>
                <input type="text" placeholder="First Name" />
              </label>

              <label>
                <p>Last Name</p>
                <input type="text" placeholder="Last Name" />
              </label>
            </span>

            <label>
              <p>Email Address</p>
              <input type="email" placeholder="Email Address" />
            </label>

            <label>
              <p>Phone Number</p>
              <input type="tel" />
            </label>

            <label>
              <p>Message</p>
              <textarea></textarea>
            </label>

            <button type="submit">Send Message</button>
          </form>
          <span id="admis-contact-image"></span>
        </div>
      </div>
    </main>
  );
}
