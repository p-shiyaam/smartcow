import React, { useState, useEffect } from "react";

import { Button } from "../components";
import { Plans } from "../constants";
import { Icon } from "../icons";

const MyPlan: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState("team");
  const [currentPlanIndex, setCurrentPlanIndex] = useState(2);

  useEffect(() => {
    setCurrentPlanIndex(
      Plans.findIndex((plan) => plan.title.toLowerCase() === currentPlan),
    );
  }, [currentPlan]);

  const isActive = (plan) => {
    return plan.title.toLowerCase() === currentPlan;
  };

  return (
    <div className="plans-container">
      <ul>
        {Plans.map((plan, index) => (
          <li
            className={`plan-item ${isActive(plan) ? "active" : ""}`}
            key={plan.title}
          >
            <h3>{plan.title}</h3>
            <ul className="features-list">
              {/* feature[0] = feature text, feature[1] = true/false */}
              {Object.entries(plan.features).map((feature) => (
                <li key={feature[0]}>
                  <Icon
                    name={feature[1] ? "tick" : "close"}
                    color={isActive(plan) ? "#fff" : "#333"}
                    size={16}
                  />
                  <span>{feature[0]}</span>
                </li>
              ))}
            </ul>
            <span className={`plan-price  ${isActive(plan) ? "active" : ""}`}>
              ${plan.price}
            </span>
            {isActive(plan) && (
              <span className="current-plan-text">Current Plan</span>
            )}
            {!isActive(plan) && (
              <Button
                btntype="secondary"
                text={currentPlanIndex < index ? "upgrade" : "downgrade"}
                onClick={() => setCurrentPlan(plan.title.toLowerCase())}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPlan;
