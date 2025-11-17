import usingAbstract from "../assets/images/using-abstract.png";
import manageYourAccount from "../assets/images/manage-your-account.png";
import manageOrgsTeamsAndProjects from "../assets/images/manage-orgs-teams-and-projects.png";
import manageBilling from "../assets/images/manage-billing.png";
import authenticateToAbstract from "../assets/images/authenticate-to-abstract.png";
import abstractSupport from "../assets/images/abstract-support.png";

import moveRightArrow from "../assets/images/move-right-arrow.svg";

import { MoveRight } from "lucide-react";

function HelpTopics() {
  // topic data
  const helpData = [
    {
      image: usingAbstract,
      title: "Using Abstract",
      description:
        "Abstract lets you manage, version, and document your designs in one place.",
      button: "Learn More",
    },
    {
      image: manageYourAccount,
      title: "Manage your account",
      description:
        "Configure your account settings, such as your email, profile details, and password.",
      button: "Learn More",
    },
    {
      image: manageOrgsTeamsAndProjects,
      title: "Manage organizations, teams, and projects",
      description:
        "Use Abstract organizations, teams, and projects to organize your people and your work.",
      button: "Learn More",
    },
    {
      image: manageBilling,
      title: "Manage billing",
      description: "Change subscriptions and payment details.",
      button: "Learn More",
    },
    {
      image: authenticateToAbstract,
      title: "Authenticate to Abstract",
      description:
        "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
      button: "Learn More",
    },
    {
      image: abstractSupport,
      title: "Abstract support",
      description: "Get in touch with a human.",
      button: "Learn More",
    },
  ];

  // topic component
  function Topic({ image, title, description, button }) {
    return (
      <div className="flex mb-[20px]">
        <div className="mr-[20px]">
          <img src={image} className="w-[64px]" />
        </div>
        <div className="">
          <div className="w-3xs lg:w-md">
            <h1 className="font-bold text-2xl mb-[20px]">{title}</h1>
            <p className="text-2xl mb-[20px]">{description}</p>
          </div>
          <a href="#" className="inline-block text-[#4C5FD5] text-xl mb-[20px]">
            <span className="flex gap-2 border-b-2 border-transparent hover:border-[#4C5FD5]">
              {button} <MoveRight />
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8 ">
      {helpData.map((data, index) => (
        <Topic
          key={index}
          image={data.image}
          title={data.title}
          description={data.description}
          button={data.button}
        />
      ))}
    </div>
  );
}

export default HelpTopics;
