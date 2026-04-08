import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPostPage() {
  return (
    <>
      <Navbar />
      <section className="blog-content-section">
        <div className="w-layout-blockcontainer container blog-dtl w-container">
          <div className="bottom-author-bx">
            <div className="div-block-24">
              <img alt="" loading="lazy" src="" className="bottom-author-img" />
              <div className="bottom-author-inner-content-bx">
                <h3 className="bottom-author-name"></h3>
                <p className="btm-author-desc"></p>
              </div>
            </div>
            <div className="div-block-27">
              <h5 className="heading-29"></h5>
              <div className="text-block-11">5min read</div>
            </div>
          </div>
          <div className="w-layout-blockcontainer blog-post-container tp w-container">
            <h2 className="main-heading"></h2>
            <p className="paragraph-11"></p>
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
                <div className="blog-top-auth-txt">5 min read</div>
              </div>
            </div>
          </div>
          <div className="blog-main-img">
            <img alt="" loading="lazy" src="" className="image" />
          </div>
          <div className="w-layout-blockcontainer blog-post-container w-container">
            <div className="blog-main-content-bx">
              <div className="cms-rich-txt w-richtext"></div>
              <div className="social-share-bx">
                <div className="text-block">Share</div>
                <div className="social-icons-wrapper">
                  <a href="#" className="ss-icn-link-bx w-inline-block">
                    <img src="/images/fb-icn.svg" loading="lazy" alt="" />
                  </a>
                  <a href="#" className="ss-icn-link-bx w-inline-block">
                    <img src="/images/twitter-icn.svg" loading="lazy" alt="" />
                  </a>
                  <a href="#" className="ss-icn-link-bx w-inline-block">
                    <img src="/images/Linked-in-icn.svg" loading="lazy" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="div-block-9">
            <Link href="/blog" className="button-2 w-button">
              back to blogs
            </Link>
            <a href="#" className="button-2-copy w-button">
              read next blog
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
