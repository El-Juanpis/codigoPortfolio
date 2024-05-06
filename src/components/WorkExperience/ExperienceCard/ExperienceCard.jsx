import './ExperienceCard.css'
import PropTypes from 'prop-types';
const ExperienceCard = ({details}) => {
  return (
    <div className='work-experience-card'>
      <h3>{details.title}</h3>


      <div className='work-duration'>
        {details.date}
      </div>
      <ul>
        {details.responsibilities.map((item)=>(
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>

  )
};
ExperienceCard.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ExperienceCard