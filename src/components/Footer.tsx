import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer-main">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-inner">
          <div className="footer-row-1">
            <div className="footer-logo-bx">
              <Link href="/" className="w-inline-block">
                <img src="/images/Logo1.png" loading="lazy" alt="" />
              </Link>
            </div>
            <img src="/placeholder.svg" loading="lazy" alt="" />
            <div className="footer-links-wrapper">
              <div className="footer-link-item-bx">
                <a href="#" className="ft-link-item d-none">
                  About
                </a>
                <a href="#" className="ft-link-item d-none">
                  Press
                </a>
                <a
                  href="mailto:contact@serbianentrepreneurs.com"
                  className="ft-link-item"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <img src="/placeholder.svg" loading="lazy" alt="" />
          <div className="footer-row-2">
            <div className="footer-social-icon-wrapper">
              <a
                href="https://twitter.com/SerbianEnt"
                className="social-link-block w-inline-block"
              >
                <img src="/images/twitter.svg" loading="lazy" alt="" />
              </a>
              <a
                href="https://blog.serbianentrepreneurs.com/"
                className="social-link-block w-inline-block"
              >
                <img
                  src="/images/medium.svg"
                  loading="lazy"
                  width="10"
                  alt=""
                  className="image-27"
                />
              </a>
              <a
                href="https://www.linkedin.com/company/serbian-entrepreneurs/about/"
                className="social-link-block w-inline-block"
              >
                <img
                  src="/images/linkedin.svg"
                  loading="lazy"
                  alt=""
                  className="image-28"
                />
              </a>
            </div>
          </div>
          <div className="footer-row-3">
            <div className="_2021-serbianentrep">
              © 2025 SerbianEntrepreneurs.com. <br />
              All Rights Reserved.
            </div>
            <div className="_181-2nd-st-san-fran">
              160 W. Camino Real, Unit #795, Boca Raton, FL 33432
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
