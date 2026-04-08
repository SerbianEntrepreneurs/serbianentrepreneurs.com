import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <section className="contact-us-hero-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="heading-18 app">Apply to join</h2>
          <p className="paragraph-10 d">
            If you are a interested in becoming a member of Serbian Entrepreneurs
            and help others, please fill out the following form.
          </p>
          <div className="w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form"
            >
              <div className="div-block-20">
                <label htmlFor="name" className="c-lable">
                  Name
                </label>
                <input
                  className="c-input w-input"
                  maxLength={256}
                  name="name"
                  data-name="Name"
                  placeholder="John Doe"
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="div-block-20">
                <label htmlFor="name-5" className="c-lable">
                  Email
                </label>
                <input
                  className="c-input w-input"
                  maxLength={256}
                  name="name-5"
                  data-name="Name 5"
                  placeholder="john@example.com"
                  type="email"
                  id="name-5"
                  required
                />
              </div>
              <div className="div-block-20">
                <label htmlFor="name-4" className="c-lable">
                  Linkedin profile
                </label>
                <input
                  className="c-input w-input"
                  maxLength={256}
                  name="name-4"
                  data-name="Name 4"
                  placeholder="Add a link to your profile"
                  type="text"
                  id="name-4"
                  required
                />
              </div>
              <div className="div-block-20">
                <label htmlFor="name-3" className="c-lable">
                  Company name
                </label>
                <input
                  className="c-input w-input"
                  maxLength={256}
                  name="name-3"
                  data-name="Name 3"
                  placeholder="Company name"
                  type="text"
                  id="name-3"
                  required
                />
              </div>
              <div className="div-block-20">
                <label htmlFor="name-2" className="c-lable">
                  your Role
                </label>
                <input
                  className="c-input w-input"
                  maxLength={256}
                  name="name-2"
                  data-name="Name 2"
                  placeholder="Your role"
                  type="text"
                  id="name-2"
                  required
                />
              </div>
              <div className="div-block-20 loction">
                <label htmlFor="San-Francisco" className="c-lable">
                  location
                </label>
                <select
                  id="San-Francisco"
                  name="San-Francisco"
                  data-name="San Francisco"
                  required
                  className="c-input lc w-select"
                >
                  <option value="">San Francisco</option>
                  <option value="First">Berlin</option>
                  <option value="Second">New York City</option>
                  <option value="Third">London</option>
                  <option value="Another option">Novi Sad</option>
                  <option value="Another option">Toronto</option>
                  <option value="Another option">Belgrade</option>
                </select>
              </div>
              <div className="div-block-20">
                <label htmlFor="field-2" className="c-lable">
                  how you can contribute
                </label>
                <textarea
                  required
                  placeholder="Let us know..."
                  maxLength={5000}
                  id="field-2"
                  name="field-2"
                  data-name="Field 2"
                  className="textarea w-input"
                ></textarea>
              </div>
              <div className="div-block-20">
                <label htmlFor="field" className="c-lable">
                  What are you hoping to gain
                </label>
                <textarea
                  required
                  placeholder="Let us know..."
                  maxLength={5000}
                  id="field"
                  name="field"
                  data-name="Field"
                  className="textarea w-input"
                ></textarea>
              </div>
              <div className="div-block-21">
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="btn submint-btn w-button"
                  value="apply to join"
                />
                <a
                  href="mailto:boston@serbianentrepreneurs.com"
                  className="btn submint-btn stnd-evnt w-button"
                >
                  attend an event
                </a>
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
