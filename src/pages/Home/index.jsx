import React from "react";
import securityIcon from "../../assets/img/icon-security.png";
import moneyIcon from "../../assets/img/icon-money.png";
import chatIcon from "../../assets/img/icon-chat.png";
import Features from "../../components/Features/Features";

export default function Home() {
  return (
    <div className="content">
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>

      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features
          featuresItemTitle="You are our #1 priority"
          featuresIcon={chatIcon}
          featuresItemContent="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Features
          featuresItemTitle="More savings means higher rates"
          featuresIcon={moneyIcon}
          featuresItemContent="The more you save with us, the higher your interest rate will be!"
        />
        <Features
          featuresItemTitle="Security you can trust"
          featuresIcon={securityIcon}
          featuresItemContent="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </div>
  );
}
