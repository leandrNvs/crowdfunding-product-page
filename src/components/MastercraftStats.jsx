export default function MastercraftStats() {
  return (
    <div className="mastercraft__stats">
      <div>
        <span className="number">$89,914</span>
        <span className="text">of $100,000 backed</span>
      </div>
      <div className="divider"></div>
      <div>
        <span className="number">5,007</span>
        <span className="text">total backers</span>
      </div>
      <div className="divider"></div>
      <div>
        <span className="number">56</span>
        <span className="text">days left</span>
      </div>
      <div className="progress">
        <div className="bar"></div>
      </div>
    </div>
  );
}
