const Socials = ({ label, title, icon, link }) => {

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="mb-0">
          {icon}
          {label}
        </div>
        <div>{title}</div>
      </a>
    </li>
  );
};

export default Socials;