import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <>
      <Navbar />
      <section className="section-7">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block-16">
            <h2 className="heading-26 main-heading">Upcoming events</h2>
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 4</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">San Francisco</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:sf@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 9</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">Berlin</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:berlin@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 12</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">New York City</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:nyc@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 17</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">London</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:london@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 17</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">Novi Sad</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:ns@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 18</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">Toronto</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:toronto@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="div-block-17 lstu">
                  <h6 className="heading-27">December 27</h6>
                  <div className="div-block-26">
                    <h4 className="heading-28">Belgrade</h4>
                    <p className="paragraph-14">Address Lorem Ipsum</p>
                    <a href="mailto:bg@serbianentrepreneurs.com" className="link">
                      attend an event<br />‍
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-col w-col-3"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-6">
        <div className="w-layout-blockcontainer container w-container">
          <div className="div-block-10">
            <h2 className="heading-20">Events recap</h2>
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                <div role="listitem" className="w-dyn-item w-col w-col-4">
                  <div className="div-block-11">
                    <div className="text-block-10"></div>
                    <img alt="" loading="lazy" src="" className="image-32" />
                    <div className="div-block-25">
                      <h1 className="heading-21"></h1>
                      <a href="#" className="btn home-hero-btn evn-btn w-button">
                        View Detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
