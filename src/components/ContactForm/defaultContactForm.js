import ContactForm from './contactForm'
import speaker from '../../assets/default-theme/images/speakersL.gif'

const DefaultContactForm = () => {

  return (
		<>
		<div className="d-flex flex-row align-items-end">
			<img loading="lazy" src={speaker} className="contact-title-img" alt="Speakers" />
			<span className="card-title px-4">Give me a shout!</span>
			<img loading="lazy" src={speaker} className="contact-title-img flip" alt="Speakers" />
		</div>

    <ContactForm />
		</>
  );
}

export default DefaultContactForm;