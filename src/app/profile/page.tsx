import Navbar from "@/components/Navbar";

export default function ProfilePage() {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <div className="dash_content">
            <div className="dash_contain">
              <div className="relative-2">
                <div>
                  <div className="profile_form-header">
                    <div>
                      <div className="profile_h1">My Profile</div>
                    </div>
                  </div>

                  {/* Profile Picture */}
                  <div className="profile_section">
                    <div className="profile_section-head">Profile Picture</div>
                    <div className="profile_flex">
                      <div className="profile_column">
                        <div className="ms-profile-image-row">
                          <img
                            src="https://assets-global.website-files.com/64a3b435f3b581d0d381bcb9/64a3bbd920604eddfaa60dc5_white-profile-empty%20(1).svg"
                            alt=""
                            className="ms-profile-image-preview"
                          />
                          <a href="#" className="ms-profile-upload w-inline-block">
                            <img
                              src="https://assets-global.website-files.com/64a3b435f3b581d0d381bcb9/64a3bbd920604eddfaa60dc4_file_upload_black_24dp%20(1).svg"
                              loading="lazy"
                              width="16"
                              alt=""
                            />
                            <div>Upload New</div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="profile_section">
                    <div className="profile_section-head">Personal Information</div>
                    <div className="profile_flex">
                      <div className="w-form">
                        <form
                          id="email-form"
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          className="profile_flex"
                        >
                          <div className="profile_column">
                            <div className="input-label">First Name</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="First-name"
                              data-name="First Name"
                              placeholder="Add a first name"
                              type="text"
                              id="First-name"
                            />
                          </div>
                          <div className="profile_column">
                            <div className="input-label">Last Name</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="Last-name"
                              data-name="Last Name"
                              placeholder="Add a last name"
                              type="text"
                              id="Last-name"
                            />
                          </div>
                          <div className="profile_column">
                            <div className="input-label">Phone Number</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="Phone"
                              data-name="Phone"
                              placeholder="Add a phone number"
                              type="tel"
                              id="Phone"
                            />
                          </div>
                          <div className="profile_column">
                            <div className="input-label">Title</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="Title"
                              data-name="Title"
                              placeholder="Add a title"
                              type="text"
                              id="Title"
                            />
                          </div>
                          <a href="#" className="edit-profile w-inline-block">
                            <div>Edit info</div>
                          </a>
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="save-button w-button"
                            value="Save changes"
                          />
                          <div className="block-inputs"></div>
                        </form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>
                            Oops! Something went wrong while submitting the form.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="profile_section">
                    <div className="profile_section-head">Email address</div>
                    <div className="profile_flex">
                      <div className="w-form">
                        <form
                          id="email-form-2"
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          className="profile_flex"
                        >
                          <div className="profile_column">
                            <div className="input-label">Email</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="Email"
                              data-name="Email"
                              placeholder="Add an email"
                              type="text"
                              id="Email"
                              required
                            />
                          </div>
                          <div className="profile_column"></div>
                          <a href="#" className="edit-profile w-inline-block">
                            <div>Edit email</div>
                          </a>
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="save-button w-button"
                            value="Save changes"
                          />
                          <div className="block-inputs"></div>
                        </form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>
                            Oops! Something went wrong while submitting the form.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="profile_section">
                    <div className="profile_section-head">Password</div>
                    <div className="profile_flex">
                      <div className="w-form">
                        <form
                          id="email-form-3"
                          name="email-form"
                          data-name="Email Form"
                          method="get"
                          className="profile_flex"
                        >
                          <div className="profile_column">
                            <div className="input-label">Current Password</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="Current-Password"
                              data-name="Current Password"
                              placeholder="Current password"
                              type="password"
                              id="Current-Password"
                            />
                          </div>
                          <div className="profile_column">
                            <div className="input-label">New Password</div>
                            <input
                              className="input-preview w-input"
                              maxLength={256}
                              name="New-Password"
                              data-name="New Password"
                              placeholder="New Password"
                              type="password"
                              id="New-Password"
                            />
                          </div>
                          <a href="#" className="edit-profile w-inline-block">
                            <div>Change password</div>
                          </a>
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="save-button w-button"
                            value="Save changes"
                          />
                          <div className="block-inputs"></div>
                        </form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>
                            Oops! Something went wrong while submitting the form.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Connections */}
                  <div className="profile_section">
                    <div className="profile_section-head">Social Connections</div>
                    <div className="profile_flex">
                      <div className="flex-row-outer social">
                        <a href="#" className="social-btn w-inline-block">
                          <div className="social-content">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/64a3b435f3b581d0d381bcb9/64a3b435f3b581d0d381bcc0_google.svg"
                              className="social-image"
                            />
                            <div className="social-text">
                              Continue with Google
                            </div>
                            <div className="disconnect-link">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets-global.website-files.com/64a3b435f3b581d0d381bcb9/64a3b435f3b581d0d381bcc2_close_black_24dp.svg"
                                className="disconnect-image"
                              />
                            </div>
                          </div>
                        </a>
                        <a href="#" className="social-btn w-inline-block">
                          <div className="social-content">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/64a3b435f3b581d0d381bcb9/64a3b435f3b581d0d381bcc3_facebook.svg"
                              className="social-image"
                            />
                            <div className="social-text">
                              Continue with Facebook
                            </div>
                            <div className="disconnect-link">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets-global.website-files.com/632c941ea9199f8985f3fd52/6331f8b4b515a6328c67f9ec_close_black_24dp.svg"
                                className="disconnect-image"
                              />
                            </div>
                          </div>
                        </a>
                        <a href="#" className="social-btn w-inline-block">
                          <div className="social-content">
                            <img
                              alt=""
                              loading="lazy"
                              src="https://assets-global.website-files.com/64a3b435f3b581d0d381bcb9/64a3b435f3b581d0d381bcc4_linkedin.svg"
                              className="social-image"
                            />
                            <div className="social-text">
                              Continue with LinkedIn
                            </div>
                            <div className="disconnect-link">
                              <img
                                alt=""
                                loading="lazy"
                                src="https://assets-global.website-files.com/632c941ea9199f8985f3fd52/6331f8b4b515a6328c67f9ec_close_black_24dp.svg"
                                className="disconnect-image"
                              />
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
