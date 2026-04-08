import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="contact-us-hero-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="columns-7 w-row">
            <div className="column-28 w-col w-col-6">
              <div className="c-left-bx">
                <h2 className="heading-18">Get in touch! </h2>
                <p className="paragraph-10">
                  If you have any questions, please don&apos;t hesitate to send
                  us a message.
                </p>
                <div className="form-block w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                  >
                    <div className="w-layout-grid contact-form-grid">
                      <div className="div-block-23">
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
                        />
                        <label htmlFor="email" className="c-lable">
                          Email{" "}
                        </label>
                        <input
                          className="c-input w-input"
                          maxLength={256}
                          name="email"
                          data-name="Email"
                          placeholder="john@example.com"
                          type="email"
                          id="email"
                          required
                        />
                        <label
                          htmlFor="Contribute-to-Community"
                          className="c-lable"
                        >
                          message
                        </label>
                        <textarea
                          placeholder="We'd love to hear from you!"
                          maxLength={5000}
                          id="Contribute-to-Community"
                          name="Contribute-to-Community"
                          data-name="Contribute to Community"
                          className="c-input txt-area ct w-input"
                        ></textarea>
                      </div>
                    </div>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="btn submint-btn w-button"
                      value="send message"
                    />
                  </form>
                  <div className="contact-success-bx w-form-done">
                    <div className="contact-s-bx-inner">
                      <div className="success-txt">
                        Thank you! Your submission has been received!
                      </div>
                    </div>
                  </div>
                  <div className="error-message-bx w-form-fail">
                    <div className="error-txt">
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column-29 w-col w-col-6">
              <img
                className="contact-hero-img"
                src="/images/Image3.jpg"
                alt=""
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, (max-width: 1279px) 46vw, (max-width: 1919px) 565px, 715px"
                loading="lazy"
                srcSet="/images/Image3-p-500.jpg 500w, /images/Image3.jpg 544w"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
