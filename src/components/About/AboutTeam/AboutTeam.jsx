import React from "react";
import "./AboutTeam.scss";
import { Link } from "react-router-dom";
import { CgFacebook } from "react-icons/cg";
import { SiInstagram } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { AiOutlineTwitter } from "react-icons/ai";

// Muhammadsodiq
export default function AboutTeam() {
  const { t } = useTranslation();
  const aboutTeamArr = [
    {
      id: 1,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 2,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 3,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 4,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 5,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 6,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 7,
      name: "KMM",
      job: "Front-end",
    },
    {
      id: 8,
      name: "KMM",
      job: "Front-end",
    },
  ];

  return (
    <section className="aboutTeam">
      <div className="container">
        <div className="aboutTeam__inner">
          <h3 className="aboutTeam__title">{t("team-title")}</h3>

          <ul className="aboutTeam__list">
            {aboutTeamArr !== undefined
              ? aboutTeamArr.map((item, index) => (
                  <li
                    className="aboutTeam__item"
                    data-aos-delay={`${index + 1}00`}
                    data-aos={"fade-up"}
                    key={index}
                  >
                    <div className="aboutTeam__item-img">
                      <img
                        src="https://static.vecteezy.com/system/resources/previews/010/193/859/original/kmm-letter-logo-design-on-black-background-kmm-creative-initials-letter-logo-concept-kmm-letter-design-vector.jpg"
                        alt=""
                      />
                    </div>

                    <div className="aboutTeam__hover-box">
                      <div className="aboutTeam__name-box">
                        <h4>{item.name}</h4>
                        <p>{item.job}</p>
                      </div>

                      <ul className="aboutTeam__icon-box">
                        <li>
                          <Link>
                            <CgFacebook />
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <SiInstagram />
                          </Link>
                        </li>
                        <li>
                          <Link>
                            <AiOutlineTwitter />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </section>
  );
}
