import { Fragment } from "react";
import "./SkillInfoCard.css";
import PropTypes from 'prop-types';

const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h3>{heading}</h3>
      <div className="skills-info-content">
        {skills.map((item, index) => (
          <Fragment key={`skill_${index}`}>
            <div className="skill-info">
              <div className="skill-info-flex">
                <img className="icon-skill" src={item.skill} alt={item.title} />
                <span>{item.title}</span>
              </div>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

SkillsInfoCard.propTypes = {
  heading: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      skill: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default SkillsInfoCard;
