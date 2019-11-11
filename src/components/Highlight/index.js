import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './style.css';

const menu = [
  { title: 'Consult', icon: 'fa fa-comments', description: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.' },
  { title: 'Design', icon: 'fa fa-paint-brush', description: 'Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.' },
  { title: 'Develop', icon: 'fa fa-cubes', description: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.' },
  { title: 'Marketing', icon: 'fa fa-bullhorn', description: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, replicable, effective altruism youth. Mobilize commitment to overcome injustice resilient, uplift social transparent effective.' },
  { title: 'Manage', icon: 'fa fa-tasks', description: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.' },
  { title: 'Evolve', icon: 'fa fa-bar-chart-o', description: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.' },
];

const iconStyle = {
  fontSize: 35,
  color: 'rgba(0, 0, 0, 0.25)'
};

const Hightlight = () => {
  return (
    <div className="contentHighlight">
      <center className="titleHighlight">
        <h1>How Can I Help You?</h1>
        <p>Our work then targeted, best practices outcomes social innovation synergy. Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.</p>
      </center>
      {
        menu.map((item, index) => (
          <div key={index} className="section">
            <div className="gridContainer">
              <p className='titleMenu'>{item.title}</p>
              <i className={item.icon} style={iconStyle}></i>
            </div>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Hightlight;
