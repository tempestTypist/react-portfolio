
import { seRef } from "react"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { ContactFormInput } from '../ContactFormInput'
import {
  name_validation,
  email_validation,
  msg_validation
} from '../../utils/inputValidations'
import { FormProvider, useForm } from 'react-hook-form'

export const ContactForm = ({ formInputs, btnLabel }) => {
  const form = useRef();
  const methods = useForm()
  
  const onSubmit = methods.handleSubmit(data => {
    let serviceID = "service_adwgep2"
    let templateID = "template_j9jc5hc"
    let publicKey = "kUTSNfIe7Ye4FJvjn"

    emailjs.sendForm(serviceID, templateID, form.current, {
      publicKey: publicKey
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops, something went wrong',
          text: error.text,
        })
      });

    methods.reset()
  })

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        ref={form}
        noValidate
        autoComplete="off"
        className="contact-form"
      >
        <ContactFormInput {...name_validation} />
        <ContactFormInput {...email_validation} />
        <ContactFormInput {...msg_validation} />
        <div className="mt-5">
          <button
            onClick={onSubmit}
            className="btn"
          >
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
}