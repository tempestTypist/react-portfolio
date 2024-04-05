import React from 'react'

const Socials = ({ label, title, icon, link }) => {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h6 className="mb-0">
          {icon}
          {label}
        </h6>
        <div>{title}</div>
      </a>
    </li>
  );
};

export default Socials;