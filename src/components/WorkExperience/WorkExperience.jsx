import  { useRef } from 'react';
import Slider from 'react-slick'; 
import adelante from '../../assets/ComplementImages/adelante.png';
import atras from '../../assets/ComplementImages/atras.png';

import { WORK_EXPERIENCE } from '../../db/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import './WorkExperience.css';

const WorkExperience = () => {
  const sliderRef = useRef();
  const settings ={
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,        
        },
      },
    ],
  };
  
  const sliderRight = () =>{
    sliderRef.current.slickNext()
  }

  const sliderLeft = () =>{
    sliderRef.current.slickPrev()
  }
  return (
    <section className='experience-container' id='experience' >
      <h2 id='experience'>Experiencia</h2>

      <div className='experience-content'>  
      <div className='arrow-right' onClick={sliderRight}>
        <img src={adelante} alt="" />
      </div>

      <div className='arrow-left' onClick={sliderLeft}>
      <img src={atras} alt="" />
      </div>

        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard
              key={item.title}
              details={item}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
