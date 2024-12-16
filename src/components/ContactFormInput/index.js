import { findInputError, isFormInvalid } from '../../utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export const ContactFormInput = ({ 
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline, 
  icon, 
  ...other 
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputErrors = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputErrors)

  // let placeholder = label && label.charAt(0).toUpperCase() + label.slice(1);

  // if (type === "textarea") {
  //   return (
  //   <div className="input-container">
  //     <textarea 
  //       aria-describedby={label}
  //       placeholder={placeholder}
  //       className="form-control"
  //       id={label} 
  //       name={"user_" + label}
  //       {...other}
  //       required
  //     />
  //     <label htmlFor={label}>
  //       {icon && icon}
  //       <span className="label">{placeholder}</span>
  //     </label>
  //     <div className="bar"></div>
  //   </div>
  //   )
  // }

  return (
    <div className="input-container">
      {multiline ? (
          <textarea
            type={type}
            name={"user_" + label}
            id={id}
            className="form-control input"
            aria-describedby={label}
            placeholder={placeholder}
            {...register(name, validation)}
          ></textarea>
      ) : (
          <input
            type={type}
            name={"user_" + label}
            id={id}
            className="form-control input"
            aria-describedby={label}
            placeholder={placeholder}
            {...register(name, validation)}
          />
      )}
      <div className="cut"></div>
      <div className="input-label d-flex justify-content-between">
        <label htmlFor={label}>
          {icon && icon}
          <span className="label">{placeholder}</span>
        </label>
        <AnimatePresence mode="wait" initial={false}>
          {isInvalid && (
            <InputError
              message={inputErrors.error.message}
              key={inputErrors.error.message}
            />
          )}
        </AnimatePresence>
      </div>
    </div>


    // <div class="input-container ic1">
    //   <input id="firstname" class="input" type="text" placeholder=" " />
    //   <div class="cut"></div>
    //   <label for="firstname" class="placeholder">First name</label>
    // </div> 
    // <div className="input-container">
    //   <input 
    //     type={type} 
    //     aria-describedby={label}
    //     placeholder={placeholder}
    //     className="form-control"
    //     id={label} 
    //     name={"user_" + label}
    //     {...other}
    //     required
    //   />
    //   <label htmlFor={label}>
    //     {icon && icon}
    //     <span className="label">{placeholder}</span>
    //   </label>
    //   <div className="bar"></div>
    // </div>
  )
}

const InputError = ({ message }) => {
  return (
    <motion.p
      className="form-input-error flex items-center px-2 font-semibold rounded-md"
      {...framer_error}
    >
      <FontAwesomeIcon icon={faCircleExclamation} className="me-1" />
      {message}
    </motion.p>
  )
}

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}