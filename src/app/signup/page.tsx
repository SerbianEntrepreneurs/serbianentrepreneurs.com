import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignUpPage() {
  return (
    <>
      <Navbar />
      <section>
        <div>
          <div className="form-wrapper">
            <h1>Create an Account</h1>
            <div className="w-form">
              <form
                id="wf-form-signup"
                name="wf-form-signup"
                data-name="signup"
                method="get"
              >
                <div>
                  <div>
                    <label htmlFor="First-Name-2">First Name</label>
                    <input
                      className="w-input"
                      maxLength={256}
                      name="First-Name-2"
                      data-name="First Name 2"
                      placeholder="e.g. Howard"
                      type="text"
                      id="First-Name-2"
                      required
                    />
                  </div>
                </div>
                <div className="text-field-wrapper">
                  <label htmlFor="Email-3">Email</label>
                  <input
                    className="w-input"
                    maxLength={256}
                    name="Email-3"
                    data-name="Email 3"
                    placeholder="e.g. howard.thurman@gmail.com"
                    type="email"
                    id="Email-3"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Password-3">Password</label>
                  <input
                    className="w-input"
                    maxLength={256}
                    name="Password-3"
                    data-name="Password 3"
                    placeholder=""
                    type="password"
                    id="Password-3"
                    required
                  />
                </div>
                <input
                  type="submit"
                  data-wait="Please wait..."
                  className="w-button"
                  value="Let's get started"
                />
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
            <div>
              <div>
                Already have an account?{" "}
                <Link href="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
