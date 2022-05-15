import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, FormikHelpers } from "formik";
import { useAlert } from "react-alert";

import { AppContext } from "../contexts";
import { Sidebar, Header, Button, FormField } from "../components";
import { localstorage, isEmpty } from "../utils";

type LoginFormProps = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);
  const alert = useAlert();

  const handleLogin = (
    values: LoginFormProps,
    { setSubmitting }: FormikHelpers<LoginFormProps>,
  ) => {
    setSubmitting(false); // Enable submit button
    const { password, ...user } = localstorage.get(values.email) || {};

    // Check if user exists in DB
    if (isEmpty(user)) {
      alert.error("User not found");
      return;
    }

    // Check if password is correct and redirect to dashboard
    if (password === values.password) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/create-video");
      return;
    }
    alert.error("Invalid email or password");
  };

  return (
    <div className="app-wrapper login-signup-container">
      <Sidebar />
      <div className="login-signup-body-container">
        <Header title="sign in" />
        <div className="login-signup-form-container">
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="form">
                <div className="form-fields-container">
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
                <Button text="Login" disabled={isSubmitting} />
              </Form>
            )}
          </Formik>
          <div className="footer-link">
            <span>New here?</span>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
