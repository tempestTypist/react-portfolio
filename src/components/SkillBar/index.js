import './style.css'

const SkillBar = ({ name, percent }) => {
  const GEM_STEP = 5; // 1 gem per 5%

  const earnedGems = Math.floor(percent / GEM_STEP);
  const snappedPercent = earnedGems * GEM_STEP;

  return (
    <li style={{ "--per": snappedPercent }}>
      <div>
        {name}
        <span className="percent-label">
          {percent} / 100
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          role="progressbar"
          aria-valuenow={snappedPercent}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </li>
  );
};

export default SkillBar;
