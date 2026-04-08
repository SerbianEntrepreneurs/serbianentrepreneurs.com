import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <section className="blog-listing-section blg">
        <div className="w-layout-blockcontainer container w-container">
          <div className="blog-listing-inner">
            <h1 className="blogs-heading">
              Tips and Insights from Serbian Startup Ecosystem
            </h1>
            <div className="blog-collection-list-wrapper w-dyn-list">
              <div role="list" className="collection-list-2 w-dyn-items">
                <div role="listitem" className="collection-item w-dyn-item">
                  <div className="blogs-item-bx">
                    <div className="div-block-7 img-blg">
                      <img alt="" loading="lazy" src="" className="blog-item-img" />
                    </div>
                    <div className="div-block-8 div-block-7">
                      <div className="text-block-8"></div>
                      <h2 className="blog-item-title"></h2>
                      <p className="paragraph"></p>
                      <a href="#" className="link-icn-bx w-inline-block">
                        <div className="text-block-7">Read More</div>
                      </a>
                    </div>
                  </div>
                  <div className="blogs-item-bx">
                    <div className="div-block-7 img-blg">
                      <img alt="" loading="lazy" src="" className="blog-item-img" />
                    </div>
                    <div className="div-block-8 div-block-7">
                      <div className="text-block-8"></div>
                      <h2 className="blog-item-title"></h2>
                      <p className="paragraph"></p>
                      <a href="#" className="link-icn-bx w-inline-block">
                        <div className="text-block-7">Read More</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-dyn-empty">
                <div>No items found.</div>
              </div>
              <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <a
                  href="#"
                  aria-label="Previous Page"
                  className="w-pagination-previous next"
                >
                  <img loading="lazy" src="/images/Arrow-81.png" alt="" />
                </a>
                <a
                  href="#"
                  aria-label="Next Page"
                  className="w-pagination-next next"
                >
                  <img loading="lazy" src="/images/Arrow-8.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
