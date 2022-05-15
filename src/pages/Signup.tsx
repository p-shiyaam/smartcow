import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import { useAlert } from "react-alert";

import { Sidebar, Header, Button, FormField } from "../components";
import { splitName, localstorage } from "../utils";

type SignupFormProps = {
  name: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const alert = useAlert();

  const handleSignup = (
    values: SignupFormProps,
    { setSubmitting }: FormikHelpers<SignupFormProps>,
  ) => {
    setSubmitting(false); // Enable submit button

    // Check if user already signed up
    if (localstorage.isExisting(values.email)) {
      alert.error("Email already exists");
      return;
    }

    // Set user data in DB and navigate to login
    localstorage.set(values.email, {
      ...splitName(values.name),
      password: values.password,
      email: values.email,
    });

    alert.success("Signup successful");
    navigate("/login");
  };

  return (
    <div className="app-wrapper login-signup-container">
      <Sidebar />
      <div className="login-signup-body-container">
        <Header title="create an account" />
        <div className="login-signup-form-container">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSignup}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <div className="form-fields-container">
                  <FormField
                    type="text"
                    name="name"
                    label="Full name"
                    required
                    minLength={3}
                  />
                  <FormField
                    type="email"
                    name="email"
                    label="Email address"
                    required
                  />
                  <FormField
                    type="password"
                    name="password"
                    label="Password"
                    required
                    minLength={8}
                  />
                </div>
                <Button text="Signup" disabled={isSubmitting} />
              </Form>
            )}
          </Formik>
          <div className="footer-link">
            <span>Already user?</span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
