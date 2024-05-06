import './Hero.css'
import reactimg from '../../assets/HeroImages/react2.png';
import htmlimg from '../../assets/HeroImages/html.png';
import cssimg from '../../assets/HeroImages/css.png';
import jsimg from '../../assets/HeroImages/javascript.png';
import juanimg from '../../assets/HeroImages/juan2.png';

const Hero = () => {
  return (
    <section className='hero-container' id='hero'>
        <div className='hero-content'>
          <h2>
            Hola! soy juan Creador ‎  de soluciones
          </h2>
          <p>Passionate Frontend Developer | Transforming ideas into seamles and visually Stunning web solutions
          </p>
        </div>


        <div className='hero-img'>
          <div>
            <div className='tech-icon'>
              <img src={reactimg} alt="" />
            </div>
            <img src={juanimg} alt="" />
          </div>
      
          <div>
            <div className='tech-icon'>
                <img src={htmlimg} alt="" />
            </div>
            <div className='tech-icon'>
                <img src={cssimg} alt="" />
            </div>
            <div className='tech-icon'>
                <img src={jsimg} alt="" />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero