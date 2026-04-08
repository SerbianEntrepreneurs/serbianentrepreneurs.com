"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="se-nav-bar-main w-nav"
    >
      <div className="container nav-container w-container">
        <Link href="/" className="logo-link-bx w-nav-brand">
          <img
            src="/images/Logo.png"
            loading="lazy"
            width="Auto"
            alt=""
            className="se-logo-main"
          />
        </Link>
        <nav
          role="navigation"
          className={`nav-menu w-nav-menu${menuOpen ? " w--open" : ""}`}
        >
          <a href="#" className="nv-link-item d-none w-nav-link">
            About
          </a>
          <a href="#" className="nv-link-item d-none w-nav-link">
            Members
          </a>
          <a href="#" className="nv-link-item d-none w-nav-link">
            Press
          </a>
          <a href="#" className="nv-link-item w-nav-link">
            Contact
          </a>
          <a href="#" className="btn nav-login-btn d-none w-button">
            Log In
          </a>
        </nav>
        <div
          className={`menu-button w-nav-button${menuOpen ? " w--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="icon w-icon-nav-menu"></div>
        </div>
      </div>
    </div>
  );
}
