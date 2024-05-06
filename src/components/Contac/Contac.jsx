import './Contac.css'
import ContactForm from './ContactForm/ContactForm'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import emailImg from '../../assets/ComplementImages/email.png';
import gitImg from '../../assets/ComplementImages/github.png';
const Contac = () => {
  return (
   <section className='contac-container' id='contac'>
    <h2>Contacto</h2>

    <div className='contact-content'>
      <div style={{flex: 1}}>
      <ContactInfoCard
      iconUrl={emailImg}
      text={'juanpablor629@gmail.com'}
      />
      <ContactInfoCard
      iconUrl={gitImg}
      text={'https://github.com/El-Juanpis'}
      />
      </div>
      <div style={{flex: 1}}>
        <ContactForm/>
      </div>
    </div>
   </section>
  )
}

export default Contac