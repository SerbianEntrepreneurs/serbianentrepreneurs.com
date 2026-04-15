import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="nv-body">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-inner">
            <h1 className="hero-text">
              Serbian Startup <br />
              Ecosystem
            </h1>
            <p className="hero-pera">
              A pay-it-forward global network of entrepreneurs fostering the
              Serbian startup ecosystem since 2016.
            </p>
            <a
              href="mailto:contact@serbianentrepreneurs.com"
              className="button w-button"
            >
              attend an event
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="client">
        <div className="w-layout-blockcontainer container w-container">
          <div className="about-us-inner">
            <div className="columns-3 w-row">
              <div className="column-22 w-col w-col-4">
                <div className="div-block-2">
                  <img
                    src="/images/Icon.svg"
                    alt="Members icon"
                    className="image-25"
                  />
                  <h1 className="heading-7">250+</h1>
                  <p className="paragraph-5">Members</p>
                </div>
              </div>
              <div className="w-col w-col-4">
                <div className="div-block-2">
                  <img
                    src="/images/Icon-1.svg"
                    alt="Events icon"
                    className="image-25"
                  />
                  <h1 className="heading-7">221+</h1>
                  <p className="paragraph-5">Events</p>
                </div>
              </div>
              <div className="column-21 w-col w-col-4">
                <div className="div-block-2 lst">
                  <img
                    src="/images/Icon-2.svg"
                    alt="Startups icon"
                    className="image-25"
                  />
                  <h1 className="heading-7">120+</h1>
                  <p className="paragraph-5">Startups we helped</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="client">
        <div className="w-layout-blockcontainer container w-container">
          <div className="about-us-inner">
            <div className="columns-8 w-row">
              <div className="column-27 w-col w-col-6">
                <div className="about-us-left-bx">
                  <h2 className="heading-6">About Serbian Entrepreneurs</h2>
                  <p className="hero-pera au-lft-pera">
                    <strong className="bold-text-4">
                      Serbian Entrepreneurs is an apolitical, non-governmental,
                      non-profit organization.
                    </strong>
                  </p>
                </div>
                <p className="paragraph-4">
                  Serbian Entrepreneurs started in September 2016 in Silicon
                  Valley, by successful entrepreneurs of Serbian descent
                  fostering the Serbian startup ecosystem around the globe
                  through comprehensive access to skills, resources, and
                  mentorship.
                  <br />‍<br />
                  We promote entrepreneurship through empowering the
                  pay-it-forward activities of our members. Our referral-based
                  members are accomplished founders, investors, engineering
                  leaders, and startup executives that together form a deeply
                  vested network.
                  <br />‍<br />
                  Our meetings provide a learning, operations, networking, and
                  investment platform and take place in our chapter cities.
                  <br />‍<br />
                  We are registered as a non-profit organization in the USA,
                  Canada and Serbia.
                </p>
              </div>
              <div className="column-23 w-col w-col-6">
                <div className="about-us-right-bx">
                  <div className="div-block-4">
                    <h1 className="heading-8">9</h1>
                    <p className="paragraph-6">Chapter Cities</p>
                  </div>
                  <img
                    src="/images/Image.png"
                    sizes="(max-width: 479px) 100vw, (max-width: 566px) 96vw, (max-width: 767px) 544px, (max-width: 991px) 354px, 460px"
                    srcSet="/images/Image-p-500.png 500w, /images/Image.png 544w"
                    alt="Members collaborating at a Serbian Entrepreneurs meeting"
                    className="image-26"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="section-3">
        <div className="w-layout-blockcontainer container w-container">
          <h1 className="heading-10">
            The pillars that support <br />
            our unique approach
          </h1>
          <div className="w-layout-layout quick-stack-3 wf-layout-layout">
            <div className="w-layout-cell cell">
              <div className="w-layout-layout quick-stack wf-layout-layout">
                <div className="w-layout-cell cell-2">
                  <img
                    src="/images/Group-63039_1Group-63039.png"
                    alt="Learn pillar icon"
                    width={76}
                    height={75}
                  />
                </div>
                <div className="w-layout-cell">
                  <h1 className="heading-11">Learn</h1>
                  <p className="paragraph-7">
                    We host regular startup pitches, panels, and
                    knowledge-sharing sessions. Access learning, networking, and
                    investment platform for our members.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="w-layout-layout quick-stack wf-layout-layout">
                <div className="w-layout-cell cell-2">
                  <img
                    src="/images/Group-63040.png"
                    alt="Connect pillar icon"
                    width={76}
                    height={76}
                  />
                </div>
                <div className="w-layout-cell">
                  <h1 className="heading-11">Connect</h1>
                  <p className="paragraph-7">
                    We provide networking opportunities with our 250+ members
                    all around the world. Join us for a discussion at our
                    meetings or on our official Slack channel.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="w-layout-layout quick-stack wf-layout-layout">
                <div className="w-layout-cell cell-2">
                  <img
                    src="/images/Group-63046.png"
                    alt="Grow pillar icon"
                    width={62}
                    height={74}
                  />
                </div>
                <div className="w-layout-cell">
                  <h1 className="heading-11">Grow</h1>
                  <p className="paragraph-7">
                    Our network can help you with raising new funds, opening new
                    markets, or connecting you with potential stakeholders.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-layout-cell">
              <div className="w-layout-layout quick-stack wf-layout-layout">
                <div className="w-layout-cell cell-2">
                  <img
                    src="/images/Group-63041.png"
                    alt="Foster pillar icon"
                    width={65}
                    height={79}
                  />
                </div>
                <div className="w-layout-cell">
                  <h1 className="heading-11">Foster</h1>
                  <p className="paragraph-7">
                    With local organizations and government we are working on
                    improving the legal and business frameworks for the startup
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="section-4">
        <div className="w-layout-blockcontainer container w-container">
          <div className="columns-4 w-row">
            <div className="column-25 w-col w-col-6">
              <h1 className="heading-13">Become a member!</h1>
              <h1 className="heading-14">how it works?</h1>
              <ul role="list" className="list">
                <li className="list-item">
                  <span className="cont">01</span>Attend one of our events as a
                  guest
                </li>
                <li className="list-item">
                  <span className="cont">02</span>Get endorsements from two
                  existing members
                </li>
                <li className="list-item">
                  <span className="cont">03</span>Interview with a chapter
                  leader
                </li>
                <li className="list-item">
                  <span className="cont">04</span>Help another member in the
                  first month
                </li>
              </ul>
              <Link href="/apply" className="btn home-hero-btn w-button">
                Apply to Join
              </Link>
            </div>
            <div className="w-col w-col-6">
              <img
                src="/images/Lifestyle-Pic.jpg"
                sizes="100vw"
                srcSet="/images/Lifestyle-Pic-p-500.jpg 500w, /images/Lifestyle-Pic.jpg 587w"
                alt="Two entrepreneurs discussing a presentation on a computer screen"
                className="image-29"
              />
            </div>
          </div>
        </div>
        <div className="w-layout-blockcontainer container membr-benifit w-container">
          <div className="div-block-6">
            <h1 className="heading-16">membership benefits</h1>
            <div className="w-row">
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Venue to present <br />
                  your business <br />
                  and get help
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Opportunity to help, <br />
                  mentor, and invest <br />
                  in startups
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Access to closed <br />
                  forums &amp; full
                  <br /> member directory
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Vote on <br />
                  organization <br />
                  matters
                </div>
              </div>
            </div>
            <div className="columns-6 w-row">
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Due diligence help <br />
                  for investors
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Pitch assistance <br />
                  for founders
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Temporary office
                  <br /> space for visiting <br />
                  members
                </div>
              </div>
              <div className="w-col w-col-3">
                <div className="text-block-4">
                  Invitation to all <br />
                  events (+1)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Board of Directors */}
      <section className="press-article-section">
        <div className="w-layout-blockcontainer container w-container">
          <h2 className="heading-3 mtm">Meet our team!</h2>
          <div className="w-layout-blockcontainer hhhh w-container">
            <h2 className="heading-12">Board Of Directors</h2>
            <div className="columns-2 w-row">
              <div className="column w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                <img
                  src="/images/Member-Pic16.jpg"
                  alt="Aleksandra Strang, Board of Directors"
                  className="image-6"
                />
                <h2 className="heading-2">Aleksandra Strang</h2>
              </div>
              <div className="column-2 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                <img
                  src="/images/Member-Pic23.jpg"
                  alt="Tihomir Bajic, Board of Directors"
                  className="image-12"
                />
                <h2 className="heading-2">Tihomir Bajic</h2>
              </div>
              <div className="column-3 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                <img
                  src="/images/Member-Pic18.jpg"
                  alt="Brano Perkovich, Board of Directors"
                  className="image-8"
                />
                <h2 className="heading-2">Brano Perkovich</h2>
              </div>
              <div className="column-4 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                <img
                  src="/images/Member-Pic19.jpg"
                  alt="Milos Citakovic, Board of Directors"
                  className="image-9"
                />
                <h2 className="heading-2">
                  Milos Citakovic
                  <br />
                </h2>
              </div>
            </div>
            <div className="columns-2 team-custom w-row">
              <div className="column w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
                <img
                  src="/images/Member-Pic21.jpg"
                  alt="Sasa Krsmanovic, Board of Directors"
                  className="image-11"
                />
                <h2 className="heading-2">Sasa Krsmanovic</h2>
              </div>
              <div className="column-7 w-col w-col-3 w-col-medium-6 w-col-small-small-stack"></div>
              <div className="column-8 w-col w-col-3 w-col-medium-6 w-col-small-small-stack"></div>
              <div className="column-20 w-col w-col-3 w-col-medium-6 w-col-small-small-stack"></div>
            </div>
          </div>
          <div className="w-layout-blockcontainer container-3 w-container"></div>
        </div>
      </section>

      {/* Chapter Leads Section */}
      <section className="press-article-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="press-article-inner f">
            <h2 className="heading-3">Chapter Leads</h2>
          </div>
          <div className="w-layout-blockcontainer container-3 w-container"></div>
        </div>
        <div className="w-layout-blockcontainer hhhh chapter-leads w-container">
          <div className="columns-2 w-row">
            <div className="column w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic19.jpg"
                alt="Milos Citakovic, Chapter Lead NYC"
                className="image-13"
              />
              <h2 className="heading-2 chapert-h2">Milos Citakovic</h2>
              <div className="text-block-9">NYC</div>
            </div>
            <div className="column-11 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic21.jpg"
                alt="Sasa Krsmanovic, Chapter Lead Toronto"
                className="image-14"
              />
              <h2 className="heading-2 chapert-h2">Sasa Krsmanovic</h2>
              <div className="text-block-9">Toronto</div>
            </div>
            <div className="column-12 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic24.jpg"
                alt="Marko Mandic, Chapter Lead Boston"
                className="image-15"
              />
              <h2 className="heading-2 chapert-h2">Marko Mandic</h2>
              <div className="text-block-9">boston</div>
            </div>
            <div className="column-13 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic25.jpg"
                alt="Dragan Petrovic, Chapter Lead San Francisco"
                className="image-16"
              />
              <h2 className="heading-2 chapert-h2">
                Dragan Petrovic
                <br />
              </h2>
              <div className="text-block-9">san francisco</div>
            </div>
          </div>
          <div className="columns-2 team-custom w-row">
            <div className="column w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic34.jpg"
                alt="Filip Perisic, Chapter Lead Berlin"
                className="image-22"
              />
              <h2 className="heading-2 chapert-h2">Filip Perisic</h2>
              <div className="text-block-9">berlin</div>
            </div>
            <div className="column-14 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic28.jpg"
                alt="Alex Paunic, Chapter Lead Miami"
                className="image-18"
              />
              <h2 className="heading-2 chapert-h2">Alex Paunic</h2>
              <div className="text-block-9">miami</div>
            </div>
            <div className="column-15 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic35.jpg"
                alt="Vladimir Corda, Chapter Lead Banja Luka"
                className="image-23"
              />
              <h2 className="heading-2 chapert-h2">Vladimir Corda</h2>
              <div className="text-block-9">banja luka</div>
            </div>
            <div className="column-16 w-col w-col-3 w-col-medium-6 w-col-small-small-stack">
              <img
                src="/images/Member-Pic36.jpg"
                alt="Srdjan Sukara, Chapter Lead Banja Luka"
                className="image-24"
              />
              <h2 className="heading-2 chapert-h2">Srdjan Sukara</h2>
              <div className="text-block-9">banja luka</div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-5">
        <div className="w-layout-blockcontainer container w-container">
          <div className="columns-5 w-row">
            <div className="column-24 w-col w-col-6">
              <img
                src="/images/Lifestyle-Pic1.jpg"
                sizes="100vw"
                srcSet="/images/Lifestyle-Pic1-p-500.jpg 500w, /images/Lifestyle-Pic1.jpg 587w"
                alt="Entrepreneurs reviewing analytics at a collaborative workspace"
                className="image-30"
              />
            </div>
            <div className="column-26 w-col w-col-6">
              <h1 className="heading-13">Events</h1>
              <p className="paragraph-9">
                Our monthly member-only events provide a venue for startup
                pitches and moderated sharing of lessons learned under the
                Chatham House Rule. They also feature ample networking
                opportunity during our standard three-hour block.
              </p>
              <div className="div-block-5">
                <div>
                  <h1 className="heading-15">berlin</h1>
                  <div>December 9</div>
                </div>
                <a href="#" className="w-inline-block">
                  <img src="/images/Arrow-1.png" alt="View event details" />
                </a>
              </div>
              <div className="div-block-5">
                <div>
                  <h1 className="heading-15">New York City</h1>
                  <div>December 12</div>
                </div>
                <a href="#" className="w-inline-block">
                  <img src="/images/Arrow-1.png" alt="View event details" />
                </a>
              </div>
              <div className="div-block-5">
                <div>
                  <h1 className="heading-15">London</h1>
                  <div>December 17</div>
                </div>
                <a href="#" className="w-inline-block">
                  <img src="/images/Arrow-1.png" alt="View event details" />
                </a>
              </div>
              <div className="div-block-5">
                <div>
                  <h1 className="heading-15">Novi Sad</h1>
                  <div>December 17</div>
                </div>
                <a href="#" className="w-inline-block">
                  <img src="/images/Arrow-1.png" alt="View event details" />
                </a>
              </div>
              <div className="div-block-5">
                <div>
                  <h1 className="heading-15">Toronto</h1>
                  <div>December 18</div>
                </div>
                <a href="#" className="w-inline-block">
                  <img src="/images/Arrow-1.png" alt="View event details" />
                </a>
              </div>
              <div className="div-block-5">
                <div>
                  <h1 className="heading-15">belgrade</h1>
                  <div>December 27</div>
                </div>
                <a href="#" className="w-inline-block">
                  <img src="/images/Arrow-1.png" alt="View event details" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <div className="w-embed"></div>
    </div>
  )
}
