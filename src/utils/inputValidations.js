import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'

export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Name',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
  icon: <FontAwesomeIcon className="icon me-2" icon={faUser} />
}

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'Email',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Invalid email',
    },
  },
  icon: <FontAwesomeIcon className="icon me-2" icon={faEnvelope} />
}

export const msg_validation = {
  name: 'message',
  label: 'message',
  multiline: true,
  id: 'message',
  placeholder: 'Message',
  validation: {
    required: {
      value: true,
      message: 'Required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
  icon: <FontAwesomeIcon className="icon me-2" icon={faComment} />
}