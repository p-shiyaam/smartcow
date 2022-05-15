import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { useAlert } from "react-alert";

import { AppContext } from "../contexts";
import { Button, FormField } from "../components";

const Profile: React.FC = () => {
  const { user, dispatch } = useContext(AppContext);
  const alert = useAlert();

  const handleUserInfoUpdate = (user, { setSubmitting }) => {
    setSubmitting(false); // Enable submit button
    dispatch({ type: "UPDATE_USER_INFO", payload: user });
    alert.success("Udpated successfully");
  };

  return (
    <div className="profile-container">
      <div>
        <img src="./user-profile.png" alt="profile pic" />
      </div>
      <div className="user-form">
        <Formik initialValues={user} onSubmit={handleUserInfoUpdate}>
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-fields-container">
                <div className="name-container">
                  <FormField
                    type="text"
                    name="firstName"
                    label="First Name"
                    required
                    minLength={3}
                  />
                  <FormField type="text" name="lastName" label="Last Name" />
                </div>
                <FormField
                  type="email"
                  name="email"
                  label="Email address"
                  required
                />
              </div>
              <Button text="Save changes" disabled={isSubmitting} />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Profile;
