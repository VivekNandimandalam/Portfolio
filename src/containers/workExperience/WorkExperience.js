import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  
  // If work experiences should be displayed
  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experience</h1> {/* Updated to singular */}
              <div className="experience-card-single"> {/* Updated for single experience */}
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  
  return null;
}
