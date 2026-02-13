import ContactForm from './contactForm'
import alien from '../../assets/space-theme/images/alien-head.png'
import alienHand from '../../assets/space-theme/images/alien-hand.png'

const SpaceContactForm = () => {

	return (
		<>
		<img loading="lazy" src={alien} alt="Alien" className="card__image" />

		<div className="d-flex flex-row align-items-end">
			<img loading="lazy" src={alienHand} className="contact-title-img" alt="" />
			<span className="card-title px-4">MAKE CONTACT</span>
			<img loading="lazy" src={alienHand} className="contact-title-img flip" alt="" />
		</div>

		<ContactForm />
		</>
	);
}

export default SpaceContactForm;