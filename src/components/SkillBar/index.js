const SkillBar = ({ name, percent }) => {

  return (
		<li style={{"--per": percent}}>
			<div>{name} <span className="percent-label">{percent} / 100</span></div>
			<div className="progress-bar">
				<div 
						className="progress" 
						role="progressbar" 
						aria-valuenow={percent} 
						aria-valuemin="0" 
						aria-valuemax="100" />
			</div>
		</li>
  );
};

export default SkillBar;