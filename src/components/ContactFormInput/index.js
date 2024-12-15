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

  return (
    <div className="input-container ic1">
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
      <div className="d-flex justify-content-between input-label">
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