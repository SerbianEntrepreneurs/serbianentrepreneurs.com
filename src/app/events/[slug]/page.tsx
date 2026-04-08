import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventDetailPage() {
  return (
    <>
      <Navbar />
      <section className="event-content-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block-12">
            <div>
              <div>
                <div>
                  <div className="div-block-13">
                    <div className="div-block-14">
                      <img alt="" loading="lazy" src="" className="image-31" />
                      <div className="div-block-15">
                        <h5 className="heading-24"></h5>
                        <p className="paragraph-12"></p>
                      </div>
                    </div>
                    <div className="div-block-22">
                      <h6 className="heading-22"></h6>
                      <p className="paragraph-13"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="event-content-bx-main">
              <div className="event-content-inner">
                <h2 className="heading-25"></h2>
                <img alt="" loading="lazy" src="" className="event-main-img" />
                <div className="author-top-bx">
                  <div className="author-top-name-bx">
                    <div className="blog-top-auth-txt">By</div>
                    <div className="blog-top-auth-txt"></div>
                  </div>
                  <div className="author-top-name-bx">
                    <div className="blog-top-auth-txt">• </div>
                    <div className="blog-top-auth-txt"></div>
                  </div>
                  <div className="author-top-name-bx">
                    <div className="blog-top-auth-txt">• </div>
                    <div className="blog-top-auth-txt">2 min read</div>
                  </div>
                </div>
                <div className="cms-rich-txt w-richtext"></div>
                <div>
                  <Link href="/events" className="button-3 w-button">
                    back to events
                  </Link>
                  <a href="#" className="button-3-copy w-button">
                    next event
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer container w-container"></div>
      </section>
      <Footer />
    </>
  );
}
