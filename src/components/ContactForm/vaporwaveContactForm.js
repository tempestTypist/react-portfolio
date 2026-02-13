import ContactForm from './contactForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faX } from '@fortawesome/free-solid-svg-icons'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

const VaporwaveContactForm = () => {

	return (
		<>
			<div className="window-header">
				<div className="header-buttons">
					<FontAwesomeIcon className="icon" icon={faMinus} />
					<FontAwesomeIcon className="icon" icon={faSquare} /> 
					<FontAwesomeIcon className="icon" icon={faX} />
				</div>
			</div>

			<div className="d-flex flex-row align-items-end mb-4">
				<span className="card-title px-4">Reach out!</span>
			</div>

			<ContactForm />
		</>
	);
}

export default VaporwaveContactForm;