import React, { useState } from "react";
import { Sidebar, Header } from "../components";

import Profile from "./Profile";
import MyPlan from "./MyPlan";
import Billing from "./Billing";

const MyAccount: React.FC = () => {
  const [page, setPage] = useState("profile");

  return (
    <div className="app-wrapper my-account-container">
      <Sidebar />
      <div className="app-body-container">
        <Header title="my account" />
        <div className="my-account-body-container">
          <ul className="pages-tab">
            <PageListItem
              page="profile"
              selectedPage={page}
              setPage={setPage}
            />
            <PageListItem
              page="my-plan"
              selectedPage={page}
              setPage={setPage}
            />
            <PageListItem
              page="billing"
              selectedPage={page}
              setPage={setPage}
            />
          </ul>
          {page === "profile" && <Profile />}
          {page === "my-plan" && <MyPlan />}
          {page === "billing" && <Billing />}
        </div>
      </div>
    </div>
  );
};

const PageListItem = ({ page, selectedPage, setPage }) => {
  return (
    <li
      className={page === selectedPage ? "active" : ""}
      onClick={() => setPage(page)}
    >
      {page}
    </li>
  );
};

export default MyAccount;
